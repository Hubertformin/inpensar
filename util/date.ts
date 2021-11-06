import moment from 'moment';

export function timeAgo(dateString) {
    return moment(dateString).fromNow();
}

interface DateFormatOptions {
    time?: boolean;
}

export function formatDate(dateString, options?: DateFormatOptions) {

    const _options: DateFormatOptions = {time: true, ...options};

    const _calendar_date = moment(dateString).calendar({sameElse: 'DD/MM/YYYY'})

    return _options?.time ? _calendar_date : _calendar_date.split(' ')[0];
}