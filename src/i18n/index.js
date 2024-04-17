import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

const resources = {
  he: {
    translation: {
      //login Component
      'Welcome Back': 'ברוך שובך',
      Email: 'אימייל',
      Password: 'סיסמה',
      'email-address': 'כתובת דוא"ל',
      'Forget Password?': 'לשכוח סיסמא?',
      Traveller: 'נוֹסֵעַ',
      'Reset It': 'אפס את זה',
      or: 'אוֹ',
      'Login With Google': 'התחבר עם גוגל ',
      Login: 'התחברות',
      "Don't have an Account?": 'אין לך חשבון?',
      'Sign up': 'הירשם',
      //preference Component
      Preferences: 'העדפות',
      Next: 'הַבָּא',
      //Sign up
      'First Name': 'שם פרטי',
      'Last Name': 'שם משפחה',
      'Phone Number': 'מספר טלפון',
      'Already have an account?': 'כבר יש לך חשבון?',
      'Continue With Google': 'המשך עם גוגל',
      Continue: 'לְהַמשִׁיך',
      'Please enter the first name and last name':
        'נא להזין את השם הפרטי ושם המשפחה ',
      'Please Enter email': 'נא להזין אימייל',
      'Please Enter Phone Number': 'נא להזין מספר טלפון',
      //Home Component
      Travelista: 'טרווליסטה',
      //Routes Component
      Home: 'בית',
      AddTrip: 'הוסףטיול ',
      Search: 'לחפש',
      Explore: 'לַחקוֹר',
      Advice: 'עֵצָה',
      //Exprore Component
      Search: 'לחפש',
      //Advice Component
      Settings: 'הגדרות',
      Profile: 'פּרוֹפִיל',
      'Account Settings': 'הגדרות חשבון ',
      Privacy: 'פְּרָטִיוּת',
      Saved: 'שמור',
      Terms: 'תנאים',
      Payment: 'תַשְׁלוּם',
      //Profile Component
      Followers: 'עוקבים ',
      Following: 'הבא',
      'Trips/Travels': 'טיולים/נסיעות ',
      //Reset Password
      'Reset Password': 'לאפס את הסיסמה',
      Reset: 'אִתחוּל',
      //verification
      'We have sent you a code Please type it here':
        'שלחנו לך קוד אנא הקלד אותו כאן ',
      'Did not get a code?': 'לא קיבלת קוד?',
      'Resend it': 'שלח אותו שוב ',
      //Create Password
      'Create Password': 'צור סיסמה ',
      'Confirm Your Password': 'אמת סיסמתך ',
      'I accept to the': 'אני מקבל את ',
      'Inventra terms': 'אינבנטרה תנאים  ',
      Conditions: 'תנאים',
      'and the': 'וה',
      'privacy policy': 'מדיניות הפרטיו ',
      'Please enter Password.': 'נא להזין סיסמה.',
      'Enter Password do not match.': 'הזן סיסמה לא תואמת.',
      'You should agreed to the terms': 'אתה צריך להסכים לתנאים',
      //Splash
      'All the Travel': 'כל הנסיעות ',
      'Community at one': 'קהילה באחד ',
      'place by Travelista': 'מקום של טרווליסטה',
      'Sign Up': 'הירשם',
      Notification: 'הוֹדָעָה',
      //New Trip
      'New Trip': 'טיול חדש',
      'Trip Name': 'שם טיול',
      'Type your Trip Name': 'הקלד את שם הטיול שלך',
      From: 'מ',
      To: 'ל',
      'Pick a Date': 'תבחר תאריך',
      Location: 'מקום',
      'choose a Location': 'לבחור מיקום',
      Description: 'תיאור',
      'Type What you want': 'הקלד מה שאתה רוצה',
      //choose travel type
      'Travel Type': 'סוג נסיעות',
      Choose: 'בחר',
      Adventures: 'הרפתקאות',
      'Choose Adventures': 'בחר הרפתקאות',
      Activities: 'פעילויות',
      'Choose Activities': 'בחר פעילויות',
      'Type of Travel': 'סוג נסיעות',
      'Choose Type of Travel': 'בחר סוג נסיעה',
      'Travel Privacy': 'פרטיות נסיעות',
      'Who can see your travel?': 'מי יכול לראות את הטיול שלך?',
      Cycling: 'רכיבה על אופניים',
      Canoe: 'קָנוֹ',
      Biking: 'רכיבה על אופניים',
      Skiing: 'סקִי',
      'Activity 1': 'פעילות 1',
      'Activity 2': 'פעילות 2',
      'Activity 3': 'פעילות 3',
      'Activity 4': 'פעילות 4',
      Local: 'מְקוֹמִי',
      Global: 'גלוֹבָּלִי',
      'Only me': 'רק אני',
      Others: 'אחרים',
      //View Details
      'View Details': 'הצג פרטים',
      Details: 'פרטים',
      Confirm: 'לְאַשֵׁר',
      'Hooray! You have successfully planned your trip':
        'הידד! תכננת בהצלחה את הטיול שלך',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: I18nManager.isRTL ? 'he' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
