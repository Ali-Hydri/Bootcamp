function greetUser(gender) {
    if (gender === 'man') {
        console.log('خوش آمدید آقا');
    } else if (gender === 'woman') {
        console.log('خوش آمدید خانم');
    } else {
        console.log('جنسیت نامشخص است');
    }
}




function greetBasedOnTime(hour) {
    if (hour >= 0 && hour < 12) {
        console.log('صبح بخیر');
    } else if (hour >= 12 && hour < 17) {
        console.log('ظهر بخیر');
    } else if (hour >= 17 && hour < 21) {
        console.log('عصر بخیر');
    } else if (hour >= 21 && hour <= 23) {
        console.log('شب بخیر');
    } else {
        console.log('ساعت نامعتبر است');
    }
}
