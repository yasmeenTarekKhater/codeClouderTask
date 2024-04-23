import dashboard from '../assets/icons/dashboard.png';
import activity from '../assets/icons/activity.png';
import report from '../assets/icons/report.png';
import tag from '../assets/icons/tag.png';
import wallet from '../assets/icons/wallet.png';
import calendar from '../assets/icons/calendar.png';
import chat from '../assets/icons/chat.png';
import call from '../assets/icons/call.png';
import settings from '../assets/icons/settings.png';

export  const  menuItem=[
    {
        path:"/",
        name:"Overview",
        icon:dashboard
    },
    {
        path:"/activity",
        name:"Activity",
        icon:activity
    },
    {
        path:"/spreadsheets",
        name:"Spreadsheets",
        icon:report
    },
    {
        path:"/coupons",
        name:"Coupons",
        icon:tag
    },
    {
        path:"/wallet",
        name:"Wallet",
        icon:wallet
    },
    {
        path:"/schedule",
        name:"Schedule",
        icon:calendar
    },
    {
      path:"/message",
      name:"Message",
      icon:chat
    },
    {
      path:"/support",
      name:"Support",
      icon:call
    },
    {
      path:"/setting",
      name:"Setting",
      icon:settings
    }

]