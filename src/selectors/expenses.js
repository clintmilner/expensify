// Get Visible Expenses
import moment from "moment";

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt),
            startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true,
            endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true,
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