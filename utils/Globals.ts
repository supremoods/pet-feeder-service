import moment from 'moment-timezone';

class Mixins {
    static getCurrentDay(): string {
        // Get the current date in the Asia/Manila timezone
        const currentDate = moment.tz("Asia/Manila");
            
        // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
        const dayIndex = currentDate.day();
    
        // Define an array of weekday names
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
        // Retrieve the day name using the index from the array
        const day = weekdays[dayIndex];
    
        return day;
    }

    static getCurrentTime(): string {
        // Get the current time in the Asia/Manila timezone
        const currentTime = moment.tz("Asia/Manila").format('HH:mm') + ':00';
        return currentTime;
    }

    static getDateYesterday(): {date: Date, day: string}{
       // Get today's date in the "Asia/Manila" timezone
        const today: moment.Moment = moment.tz("Asia/Manila");
        
        // Subtract one day from today's date to get yesterday's date
        const yesterday: moment.Moment = today.clone().subtract(1, 'day');
        
        // Get the day of the week for yesterday in abbreviated format
        const daysAbbreviated: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayIndex: number = yesterday.day();
        const day: string = daysAbbreviated[dayIndex];
        
        return { date: yesterday.toDate(), day: day };
    }
    

    static convertToManilaTime(timeString: string): string{
         // Create a Date object from the provided time string
        const date: Date = new Date(timeString);

        // Options for formatting the time
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Asia/Manila',
            hour12: false, // 24-hour format
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        // Get the time string in the timezone of Asia/Manila
        const timeInManila: string = date.toLocaleTimeString('en-US', options);
        
        return timeInManila;
    } 


}

export default Mixins;
