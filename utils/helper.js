export function daysAgo(timestamp) {
    const date = new Date(timestamp);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - date.getTime() - (7 * 60 * 60 * 1000)); // WIB is UTC+7
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return `${diffDays} hari yang lalu`;
}

export function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return `${day} ${months[parseInt(month) - 1]} ${year}`;
};

export function calculateDate(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffMonths = (end.getMonth() - start.getMonth()) +
        (12 * (end.getFullYear() - start.getFullYear()));
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;

    if (years === 0) {
        return `${months} bln`;
    } else if (months === 0) {
        return `${years} th`;
    } else {
        return `${years} th ${months} bln`;
    }
};