// Get Visible Expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate,
            endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate,
            textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // sortBy DESC
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1 // sortBy High->Low
        }
    });
};