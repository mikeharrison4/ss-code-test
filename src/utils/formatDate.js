import moment from 'moment';

const formatDate = date => moment(new Date(date)).format('MMM Do YYYY');

export default formatDate;