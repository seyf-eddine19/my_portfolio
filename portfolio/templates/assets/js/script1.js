/*--------------------------- SWITCH NUMBERS ----------------------------*/
function numberSwitch(number) {
    let n;
    switch (parseInt(number)) {
        //units
        case  0: n = ['zéro',    'zero',   'صفر'   ];   break;
        case  1: n = ['un',      'one',    'واحد'     ];   break;
        case  2: n = ['deux',    'two',    'اتنان'   ];   break;
        case  3: n = ['trois',   'three',  'تلاثة'  ];   break;
        case  4: n = ['quatre',  'four',   'أربعة'   ];   break;
        case  5: n = ['cinq',    'five',   'خمسة'   ];   break;
        case  6: n = ['six',     'six',    'ستة'   ];   break;
        case  7: n = ['sept',    'seven',  'سبعة'  ];   break;
        case  8: n = ['huit',    'eight',  'تمانية' ];   break;
        case  9: n = ['neuf',    'nine',   'تسعة'  ];   break;
        //tens
        case 10: n = ['dix',              'Ten',       'عشرة'         ];   break;
        case 11: n = ['onze',             'eleven',    'أحد عشر'      ];   break;
        case 12: n = ['douze',            'twelve',    'اثنا عشر'     ];   break;
        case 13: n = ['treize',           'thirteen',  'ثلاثة عشر'   ];   break;
        case 14: n = ['quatorze',         'fourteen',  'أربعة عشر'    ];   break;
        case 15: n = ['quinze',           'fifteen',   'خمسة عشر'    ];   break;
        case 16: n = ['seize',            'sixteen',   'ستة عشر'    ];   break;
        case 17: n = ['dix-sept',         'seventeen', 'سبعة عشر'   ];   break;
        case 18: n = ['dix-huit',         'eighteen',  'ثمانية عشر'  ];   break;
        case 19: n = ['dix-neuf',         'nineteen',  'تسعة عشر'   ];   break;
        case 20: n = ['vingt',            'twenty',    'عشرون'       ];   break;
        case 30: n = ['trente',           'thirty',    'ثلاثون'      ];   break;
        case 40: n = ['quarante',         'forty',     'أربعون'       ];   break;
        case 50: n = ['cinquante',        'fifty',     'خمسون'       ];   break;
        case 60: n = ['soixante',         'sixty',     'ستون'       ];   break;
        case 70: n = ['soixante-dix',     'seventy',   'سبعون'      ];   break;
        case 80: n = ['quatre-vingt',     'eighty',    'ثمانون'      ];   break;
        case 90: n = ['quatre-vingt-dix', 'ninety',    'تسعون'      ];   break;
    }
    return n;
}
/*------------------------ SWITCH LARGE NUMBERS -------------------------*/
function largeNumbers(deg) {
    let d;
    switch (parseInt(deg)) {
        case  3: d = ['mille',           'thousand',    'الاف',              ];   break;
        case  6: d = ['millions',        'million',     'مليون',            ];   break;
        case  9: d = ['milliards',       'billion',     'مليار',             ];   break;
        case 12: d = ['billions',        'trillion',    'تريليون',         ];   break;
        case 15: d = ['mille-billions',  'quadrillion', 'كوادريليون',       ];   break;
        case 18: d = ['trillion',        'quintillion', 'كوينتليون',      ];   break;
        case 21: d = ['mille-trillion', 'sextillion',   'سيكستيليون',   ];   break;
        case 24: d = ['quatrillion',     'septillion',  'سبتليون',        ];   break;
        default: d = ['', '', '']; 
    }
    return d;
}
class myNumber {
  constructor(number) {
    this.n = number;
    this.nums;
    this.words;
    this.phrase;
  }
}
/*-------------------------- SEPARATE NUMBERS ---------------------------*/
function getNum(number) {
    let myNum = new myNumber(number);
    let nums = [], x = [], fr = [], en = [], ar = [];
    //var N = number, r, i = 0;
    // do {
    //     r = N % 10;
    //     var a = r;
    //     nums[i] = r;
    //     if ((i-1)%3 == 0 && r !== 0) {
    //         if (r == 1) a = r + '' + nums[i-1];
    //         else a = r + '0';
    //     }
    //     fr[i] = numberSwitch(a)[0];
    //     en[i] = numberSwitch(a)[1];
    //     ar[i] = numberSwitch(a)[2];
    //     N = (N - r)/ 10; 
    //     i++;
    // } while (N > 0);
    var n = '' + number;
    for (var i = 0, j = n.length - 1; i <= n.length - 1; i++,j--) {
        var a = n[j];
        nums[i] = a;
        if ((i-1)%3 == 0 && a !== 0) {
            if (a == 1) a += '' + nums[i-1];
            else a += '0';
        }
        a = parseInt(a);
        fr[i] = numberSwitch(a)[0]; en[i] = numberSwitch(a)[1]; ar[i] = numberSwitch(a)[2];
    }    
    myNum.words = {fr, en, ar};
    myNum.nums = nums;
    if (nums.length == 1) {ar = myNum.words.ar; fr = myNum.words.fr; en = myNum.words.en;}
    else ar = convertToArabic(myNum), fr = convertToFrench(myNum), en = convertToEnglish(myNum);
    myNum.phrase = {ar, fr, en};
    console.log(myNum)
    return myNum;
}
/*---------------------- CONVERT NUMBERS TO ARABIC ----------------------*/
function convertToArabic(myNum) {
    let nums = myNum.nums, words = myNum.words.ar, phrase = '';
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i%3 == 0) {
            if (i == nums.length - 1 && nums[i] != 1 && nums[i] != 0 && nums[i] != 2) phrase += words[i] + ' ';
            if (i == 3 && nums[i] == 1) phrase += 'الف '; 
            else if (nums[i+2] != 0||nums[i+1] != 0||nums[i] != 0||i == nums.length - 1) {
                phrase += largeNumbers(i)[2];
                if (nums[i] == 2 && i != 0) phrase += 'ان '; else phrase += ' ';
            }
        } else if ((i-2)%3 == 0) {
            if (nums[i] != 0 && i != nums.length - 1) phrase += 'و';
            if (nums[i] == 1) phrase += 'مائة '; 
            else if (nums[i] == 2) phrase += 'مئتان '; 
            else if (nums[i] != 0) phrase += words[i] + ' مائة ';
        } else if ((i-1)%3 == 0) {
            var r = nums[i] + '' + nums[i-1] + ' ';
            if (i != nums.length - 1 && parseInt(r) > 0) phrase += 'و';
            if (nums[i] == 0 && (nums[i-1] > 1 || (i == 1 && nums[i-1] != 0))) phrase += words[i-1] + ' ';
            else if (nums[i] == 1) phrase += words[i] + ' ';
            else if (nums[i] != 0 && nums[i-1] == 0) phrase += words[i] + ' ';
            else if (nums[i] != 0 && nums[i-1] != 0) phrase += words[i-1] + ' و' + words[i] + ' ';
        }
    }
    return phrase;
}
/*--------------------- CONVERT NUMBERS TO ENGLISH ----------------------*/
function convertToEnglish(myNum) {
    let nums = myNum.nums, words = myNum.words.en, phrase = '';
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i % 3 == 0) {
            if (i == nums.length - 1) phrase += words[i] + ' ';
            if (nums[i+2] != 0||nums[i+1] != 0||nums[i] != 0||i == nums.length - 1) phrase += largeNumbers(i)[1] + ' ';
        } else if ((i-2)%3 == 0 && nums[i] != 0) phrase += words[i] + ' hundred ';
        else if ((i-1)%3 == 0) {
            if (nums[i] == 0 && nums[i-1] != 0) phrase += words[i-1] + ' ';
            else if ((nums[i] != 0 && nums[i-1] == 0)||nums[i] == 1) phrase += words[i] + ' ';
            else if (nums[i] != 0 && nums[i-1] != 0) phrase += words[i] + '-' + words[i-1] + ' ';
        }
    }
    return phrase;
}
/*--------------------- CONVERT NUMBERS TO FRENCH -----------------------*/
function convertToFrench(myNum) {
    let nums = myNum.nums, words = myNum.words.fr, phrase = '';
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i % 3 == 0) {
            if (i == nums.length - 1 && nums[i] != 1 && nums[i] != 0) phrase += words[i] + ' ';
            if (nums[i+2] != 0||nums[i+1] != 0||nums[i] != 0||i == nums.length - 1) phrase += largeNumbers(i)[0] + ' ';
        } else if ((i-2)%3 == 0 && nums[i] != 0) {
            if (nums[i] == 1) phrase += 'cents ';
            else phrase += words[i] + ' cents ';
        } else if ((i-1)%3 == 0) {
            if (nums[i] == 0 && (nums[i-1] > 1 || (i == 1 && nums[i-1] != 0))) phrase += words[i-1] + ' ';
            else if (nums[i] == 1) phrase += words[i] + ' ';
            else if (nums[i] != 0) {
                if ((nums[i] == 9 || nums[i] == 7) && nums[i-1] != 0) {
                    var a = nums[i] - 1 + '0';
                    var b = '1' + nums[i-1];
                    words[i] = numberSwitch(a)[0];
                    words[i-1] = numberSwitch(b)[0];
                }
                if (nums[i-1] == 0) phrase += words[i] + ' ';
                else if (nums[i-1] == 1){ phrase += words[i] + '-et-' + words[i-1] + ' ';}
                else phrase += words[i] + '-' + words[i-1] + ' ';
            }
        }
    }
    return phrase;
}
/*--------------------- CONVERT NUMBERS TO LETTER -----------------------*/
function NumberToLetter(number, lang) {

    if (number.toString().replace(/ /gi, "").length > 27)  return "dépassement de capacité";
    if (isNaN(number.toString().replace(/ /gi, "")))       return "number non valide";
    //nb = parseFloat(number.toString().replace(/ /gi, ""));
    //if (Math.ceil(nb) != nb) return  "number avec virgule non géré.";
    
    let myNum = getNum(number);
    if (number == '')  return '';
    let phrase = myNum.phrase;
    return phrase;
}
/*-----------------------------------------------------------------------*/


// console.log(NumberToLetter(132346778908889)); 
// console.log(NumberToLetter(52690,'')); 
// console.log(NumberToLetter(527840690,'Fr')); 
// console.log(NumberToLetter(527840690,'En')); 

