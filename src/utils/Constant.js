import result from "../images/icons/chart-timeline-variant.svg";
import orders from "../images/icons/orders-24px.svg";
import messages from "../images/icons/mail_outline-24px.svg";
import calls from "../images/icons/calls-24px.svg";
import counterparties from "../images/icons/people-24px.svg";
import documents from "../images/icons/documents-24px.svg";
import performers from "../images/icons/perm_identity_black_24dp.svg";
import reports from "../images/icons/briefcase-outline.svg";
import knowledge from "../images/icons/local_library_black_24dp.svg";
import settings from "../images/icons/settings-24px.svg";

export const URL = "https://api.skilla.ru/mango";
export const TOKEN = "testtoken";
export const DATE = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
};
export const MONTHS = {
  0: "янв",
  1: "фев",
  2: "мар",
  3: "апр",
  4: "май",
  5: "июн",
  6: "июл",
  7: "авг",
  8: "сен",
  9: "окт",
  10: "ноя",
  11: "дек",
};

export const MENU_ITEM = [
  [
    "Итоги",
    "Заказы",
    "Сообщения",
    "Звонки",
    "Контрагенты",
    "Документы",
    "Исполнители",
    "Отчеты",
    "База знаний",
    "Настройки",
  ],
  [
    result,
    orders,
    messages,
    calls,
    counterparties,
    documents,
    performers,
    reports,
    knowledge,
    settings,
  ],
];

export const FILTER_ITEMS = [
  "Все типы",
  "Все сотрудники",
  "Все звонки",
  "Все источники",
  "Все оценки",
  "Все ошибки",
];

export const DATE_ITEMS = ["Неделя", "Месяц", "Год"];

export const TYPE_ITEMS = ["Входящие", "Исходящие", "Все звонки"];

export const SUBHEADER_ITEMS = [
  "Тип",
  "Время",
  "Сотрудник",
  "Звонок",
  "Источник",
  "Оценка",
  "Длительность",
];

const currentInit = new Date();
export const months = currentInit.getMonth();
export const date = currentInit.getDate();
export const year = currentInit.getFullYear();
