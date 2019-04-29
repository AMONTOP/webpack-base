import {showDate, showColorPanel} from './util';

import person from '../source/person'

import '../css/main.css'

document.write("<h2>欢迎使用webpack</h2>");

showDate();
showColorPanel();

document.write(JSON.stringify(person));
