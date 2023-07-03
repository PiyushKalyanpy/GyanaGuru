export const calculateTime = (inputTime: string) => {
    console.log(inputTime);
    const currentTime: Date = new Date();
    const inputDateTime: Date = new Date(inputTime.replace("Z", "+00:00"));
    const timeDifference = currentTime - inputDateTime;

    if (timeDifference < 60000) {
        // Seconds ago
        const secondsAgo = Math.floor(timeDifference / 1000);
        return `${secondsAgo} sec ago`;
    } else if (timeDifference < 3600000) {
        // Minutes ago
        const minutesAgo = Math.floor(timeDifference / 60000);
        return `${minutesAgo} mins ago`;
    } else if (timeDifference < 86400000) {
        // Hours ago
        const hoursAgo = Math.floor(timeDifference / 3600000);
        return `${hoursAgo} hrs ago`;
    } else if (timeDifference < 2592000000) {
        // Days ago
        const daysAgo = Math.floor(timeDifference / 86400000);
        return `${daysAgo} days ago`;
    } else if (timeDifference < 31104000000) {
        // Months ago
        const monthsAgo = Math.floor(timeDifference / 2592000000);
        return `${monthsAgo} months ago`;
    } else {
        // Years ago
        const yearsAgo = Math.floor(timeDifference / 31104000000);
        return `${yearsAgo} years ago`;
    }
}
