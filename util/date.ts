import moment from 'moment';

export function timeAgo(dateString) {
    return moment(dateString).fromNow();
}