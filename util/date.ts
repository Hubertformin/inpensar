import moment from 'moment';

export function timeAgo(dateString) {
    return moment(dateString).fromNow();
}

export function formatDate(dateString) {
    return moment(dateString).calendar()
}