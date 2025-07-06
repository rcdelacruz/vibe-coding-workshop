// Habit management logic and business rules
class HabitManager {
    constructor() {
        this.storage = new HabitStorage();
    }

    // Create a new habit
    addHabit(name, description = '') {
        if (!name || name.trim().length === 0) {
            throw new Error('Habit name is required');
        }

        const trimmedName = name.trim();
        
        // Check for duplicate names
        const existingHabits = this.getAllHabits();
        if (existingHabits.some(habit => habit.name.toLowerCase() === trimmedName.toLowerCase())) {
            throw new Error('A habit with this name already exists');
        }

        const habit = {
            id: Date.now(), // Simple ID generation
            name: trimmedName,
            description: description.trim(),
            createdAt: new Date().toISOString(),
            completions: [] // Array of completion dates
        };

        this.storage.saveHabit(habit);
        return habit;
    }

    // Get all habits
    getAllHabits() {
        return this.storage.getAllHabits();
    }

    // Get a specific habit by ID
    getHabit(habitId) {
        return this.storage.getHabit(habitId);
    }

    // Update habit properties
    updateHabit(habitId, updates) {
        const habit = this.getHabit(habitId);
        if (!habit) {
            throw new Error('Habit not found');
        }

        // Validate name if being updated
        if (updates.name !== undefined) {
            if (!updates.name || updates.name.trim().length === 0) {
                throw new Error('Habit name cannot be empty');
            }
            
            const trimmedName = updates.name.trim();
            const existingHabits = this.getAllHabits();
            const nameExists = existingHabits.some(h => 
                h.id !== habitId && h.name.toLowerCase() === trimmedName.toLowerCase()
            );
            
            if (nameExists) {
                throw new Error('A habit with this name already exists');
            }
            
            habit.name = trimmedName;
        }

        if (updates.description !== undefined) {
            habit.description = updates.description.trim();
        }

        this.storage.saveHabit(habit);
        return habit;
    }

    // Delete a habit
    deleteHabit(habitId) {
        const habit = this.getHabit(habitId);
        if (!habit) {
            throw new Error('Habit not found');
        }
        
        this.storage.deleteHabit(habitId);
    }

    // Mark habit as completed for today
    markCompleted(habitId, date = null) {
        const habit = this.getHabit(habitId);
        if (!habit) {
            throw new Error('Habit not found');
        }

        const targetDate = date ? new Date(date) : new Date();
        const dateString = this.formatDate(targetDate);
        
        // Only allow marking today (prevent editing past)
        if (!date && !this.isToday(targetDate)) {
            throw new Error('Can only mark habits for today');
        }

        // Check if already completed for this date
        if (!habit.completions.includes(dateString)) {
            habit.completions.push(dateString);
            habit.completions.sort(); // Keep dates sorted
            this.storage.saveHabit(habit);
        }
    }

    // Mark habit as incomplete for today
    markIncomplete(habitId, date = null) {
        const habit = this.getHabit(habitId);
        if (!habit) {
            throw new Error('Habit not found');
        }

        const targetDate = date ? new Date(date) : new Date();
        const dateString = this.formatDate(targetDate);
        
        // Only allow unmarking today
        if (!date && !this.isToday(targetDate)) {
            throw new Error('Can only unmark habits for today');
        }

        // Remove completion for this date
        habit.completions = habit.completions.filter(d => d !== dateString);
        this.storage.saveHabit(habit);
    }

    // Check if habit is completed today
    isCompletedToday(habitId) {
        return this.isCompletedOnDate(habitId, new Date());
    }

    // Check if habit is completed on specific date
    isCompletedOnDate(habitId, date) {
        const habit = this.getHabit(habitId);
        if (!habit) return false;
        
        const dateString = this.formatDate(date);
        return habit.completions.includes(dateString);
    }

    // Get current streak for a habit
    getCurrentStreak(habitId) {
        const habit = this.getHabit(habitId);
        if (!habit || habit.completions.length === 0) {
            return 0;
        }

        let streak = 0;
        let currentDate = new Date();
        
        // Check if completed today first
        if (this.isCompletedOnDate(habitId, currentDate)) {
            streak = 1;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            // If not completed today, check if completed yesterday
            currentDate.setDate(currentDate.getDate() - 1);
            if (!this.isCompletedOnDate(habitId, currentDate)) {
                return 0; // No current streak
            }
            streak = 1;
            currentDate.setDate(currentDate.getDate() - 1);
        }

        // Count consecutive days backwards
        while (this.isCompletedOnDate(habitId, currentDate)) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        }

        return streak;
    }

    // Get completion percentage for last N days
    getCompletionRate(habitId, days = 30) {
        const habit = this.getHabit(habitId);
        if (!habit) return 0;

        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days + 1);

        let completedDays = 0;
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            if (this.isCompletedOnDate(habitId, currentDate)) {
                completedDays++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return Math.round((completedDays / days) * 100);
    }

    // Utility functions
    formatDate(date) {
        return date.toISOString().split('T')[0]; // YYYY-MM-DD format
    }

    isToday(date) {
        const today = new Date();
        return this.formatDate(date) === this.formatDate(today);
    }
}