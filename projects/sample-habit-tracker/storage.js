// LocalStorage wrapper for habit data persistence
class HabitStorage {
    constructor() {
        this.storageKey = 'habitTracker_habits';
        this.version = '1.0';
        this.init();
    }

    init() {
        // Check if data exists and migrate if necessary
        this.migrateDataIfNeeded();
    }

    // Get all habits from localStorage
    getAllHabits() {
        try {
            const data = localStorage.getItem(this.storageKey);
            if (!data) {
                return [];
            }
            
            const parsed = JSON.parse(data);
            return Array.isArray(parsed.habits) ? parsed.habits : [];
        } catch (error) {
            console.error('Error reading habits from storage:', error);
            return [];
        }
    }

    // Save a single habit (add or update)
    saveHabit(habit) {
        try {
            const habits = this.getAllHabits();
            const existingIndex = habits.findIndex(h => h.id === habit.id);
            
            if (existingIndex >= 0) {
                // Update existing habit
                habits[existingIndex] = { ...habit };
            } else {
                // Add new habit
                habits.push({ ...habit });
            }
            
            this.saveAllHabits(habits);
        } catch (error) {
            console.error('Error saving habit:', error);
            throw new Error('Failed to save habit');
        }
    }

    // Get a specific habit by ID
    getHabit(habitId) {
        const habits = this.getAllHabits();
        return habits.find(habit => habit.id === habitId) || null;
    }

    // Delete a habit
    deleteHabit(habitId) {
        try {
            const habits = this.getAllHabits();
            const filteredHabits = habits.filter(habit => habit.id !== habitId);
            this.saveAllHabits(filteredHabits);
        } catch (error) {
            console.error('Error deleting habit:', error);
            throw new Error('Failed to delete habit');
        }
    }

    // Save all habits to localStorage
    saveAllHabits(habits) {
        try {
            const data = {
                version: this.version,
                lastUpdated: new Date().toISOString(),
                habits: habits
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            
            // Check if it's a quota exceeded error
            if (error.name === 'QuotaExceededError') {
                throw new Error('Storage quota exceeded. Please clear some data.');
            }
            
            throw new Error('Failed to save data');
        }
    }

    // Clear all habit data
    clearAllData() {
        try {
            localStorage.removeItem(this.storageKey);
        } catch (error) {
            console.error('Error clearing data:', error);
            throw new Error('Failed to clear data');
        }
    }

    // Export data for backup
    exportData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error exporting data:', error);
            return null;
        }
    }

    // Import data from backup
    importData(data) {
        try {
            // Validate data structure
            if (!data || !Array.isArray(data.habits)) {
                throw new Error('Invalid data format');
            }
            
            // Validate each habit
            data.habits.forEach(habit => {
                if (!habit.id || !habit.name || !Array.isArray(habit.completions)) {
                    throw new Error('Invalid habit data structure');
                }
            });
            
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (error) {
            console.error('Error importing data:', error);
            throw new Error('Failed to import data: ' + error.message);
        }
    }

    // Check storage size
    getStorageInfo() {
        try {
            const data = localStorage.getItem(this.storageKey);
            const sizeInBytes = data ? new Blob([data]).size : 0;
            const sizeInKB = Math.round(sizeInBytes / 1024 * 100) / 100;
            
            return {
                sizeInBytes,
                sizeInKB,
                habitCount: this.getAllHabits().length
            };
        } catch (error) {
            console.error('Error getting storage info:', error);
            return null;
        }
    }

    // Data migration for future versions
    migrateDataIfNeeded() {
        try {
            const data = localStorage.getItem(this.storageKey);
            if (!data) {
                return; // No existing data
            }
            
            const parsed = JSON.parse(data);
            
            // If it's an old format (just an array), migrate it
            if (Array.isArray(parsed)) {
                const migratedData = {
                    version: this.version,
                    lastUpdated: new Date().toISOString(),
                    habits: parsed
                };
                
                localStorage.setItem(this.storageKey, JSON.stringify(migratedData));
                console.log('Data migrated to new format');
            }
        } catch (error) {
            console.error('Error during data migration:', error);
            // Don't throw here, just log the error
        }
    }

    // Check if localStorage is available
    isStorageAvailable() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (error) {
            return false;
        }
    }
}