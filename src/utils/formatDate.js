import moment from 'moment';
import {DATE_FORMAT} from "../constants/daysConstants";

const formatDate = date => moment(date).format(DATE_FORMAT);

export default formatDate;