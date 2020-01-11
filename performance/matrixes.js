
// Matrix
var takeOffGroundMatrix = {
    //takeOffGroundMatrix[weight][temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [207,231,258,289,323,362,405,455,551,575,647],
        0: [263,294,328,367,411,460,515,578,650,730,822],
        15: [301,330,362,398,438,481,530,584,645,712,786],
        25: [328,366,409,457,511,572,642,720,809,909,1023],
        50: [401,447,500,559,625,700,785,880,989,1112,1252]
    },
    
    //1080kg
    1080: {
        '-25': [148,165,184,206,230,258,289,324,364,410,461],
        0: [188,210,234,262,293,328,368,412,463,521,586],
        15: [215,235,258,284,312,343,378,417,460,508,561],
        25: [234,261,291,326,364,408,457,513,577,648,730],
        50: [286,319,356,398,446,499,559,628,705,793,893]
    },
    
    //930kg
    930: {
        '-25': [100,112,125,140,156,175,196,220,247,278,313],
        0: [127,142,159,177,198,222,249,280,314,353,397],
        15: [146,160,175,192,212,233,256,282,312,344,380],
        25: [158,177,197,221,247,277,310,348,391,440,495],
        50: [194,216,242,270,302,338,379,426,478,538,605]
    },

    'spacing': 1000
};

var takeOffFiftyFtMatrix = {
    //takeOffFiftyftMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [271,303,338,378,423,473,531,595,669,752,847],
        '0': [345,385,430,480,537,602,675,757,850,956,1076],
        '15': [394,432,474,521,573,630,694,765,844,932,1029],
        '25': [429,479,535,598,669,749,840,942,1059,1190,1340],
        '50': [525,586,654,731,818,916,1027,1152,1295,1456,1638]
    },
    
    //1080kg
    1080: {
        '-25': [193,216,241,269,301,338,378,425,477,536,604],
        0: [246,274,306,342,383,429,481,540,606,682,767],
        15: [281,308,338,372,409,449,495,545,602,664,734],
        25: [306,341,381,426,477,534,599,672,755,849,955],
        50: [374,418,466,521,583,653,732,822,923,1038,1168]
    },
    
    //930kg
    930: {
        '-25': [131,146,163,183,204,229,257,288,323,364,409],
        0: [167,186,208,232,260,291,326,366,411,462,520],
        15: [190,209,229,252,277,305,335,370,408,450,498],
        25: [207,231,258,289,323,362,406,455,512,575,648],
        50: [254,283,316,353,395,443,496,557,626,704,792]
    },

    'spacing': 1000
}

var landingGroundMatrix = {
    //landingGroundMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [199,206,214,222,230,239,248,258,268,278,289],
        0: [219,227,236,244,254,263,273,284,295,306,318],
        15: [231,238,245,252,260,268,276,285,294,303,313],
        25: [239,248,257,267,277,287,298,310,322,334,348],
        50: [259,269,279,289,300,311,323,336,349,362,377]
    },
    
    //1080kg
    1080: {
        '-25': [175,181,188,195,202,210,218,226,235,244,254],
        0: [192,199,207,215,223,231,240,249,259,269,280],
        15: [203,209,215,222,228,235,243,250,258,266,275],
        25: [210,218,226,234,243,252,262,272,283,294,305],
        50: [227,236,245,254,263,273,284,295,306,318,331]
    },
    
    //930kg
    930: {
        '-25': [150,156,162,168,174,181,188,195,203,210,219],
        0: [166,172,178,185,192,199,207,215,223,232,241],
        15: [175,180,185,191,197,203,209,215,222,229,237],
        25: [181,187,194,202,209,217,226,234,243,253,263],
        50: [196,203,211,219,227,235,244,254,264,274,285]
    },

    'spacing': 1000
}

var landingFiftyFtMatrix = {
    //landingFiftyFtMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [308,318,328,348,348,359,371,382,395,408,421],
        0: [334,344,355,377,377,389,402,415,428,442,457],
        15: [349,358,367,385,385,395,405,416,427,438,450],
        25: [359,370,382,406,406,419,432,446,461,476,492],
        50: [384,396,408,434,434,448,463,478,494,510,527]
    },
    
    //1080kg
    1080: {
        '-25': [271,279,288,306,306,315,325,336,347,358,370],
        0: [293,302,311,331,331,342,353,364,376,388,401],
        15: [306,314,322,338,338,347,356,365,375,385,395],
        25: [315,325,335,356,356,368,380,392,405,418,432],
        50: [337,348,358,381,381,394,406,420,434,448,463]
    },
    
    //930kg
    930: {
        '-25': [233,240,248,263,263,272,280,289,299,308,319],
        0: [252,260,268,285,285,294,304,313,324,334,346],
        15: [264,270,277,291,291,299,307,315,323,331,340],
        25: [271,280,288,307,307,317,327,338,349,360,372],
        50: [290,299,309,328,328,339,350,361,373,386,399]
    },

    'spacing': 1000
};

var takeoffClimbVyMatrix = {   //Contains duplicate data, interpolation btw temp not necessary
    //takeoffClimbMatrix[weight][Temp][Alt/2000ft]   //OBS, this is 2000 ft spacing
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [86,83,79,76,73,70,67,64],
        0: [86,83,79,76,73,70,67,64],
        15: [86,83,79,76,73,70,67,64],
        25: [86,83,79,76,73,70,67,64],
        50: [86,83,79,76,73,70,67,64]
    },
    
    //1080kg
    1080: {
        '-25': [85,82,79,76,73,69,66,63],
        0: [85,82,79,76,73,69,66,63],
        15: [85,82,79,76,73,69,66,63],
        25: [85,82,79,76,73,69,66,63],
        50: [85,82,79,76,73,69,66,63]
    },
    
    //930kg
    930: {
        '-25': [85,82,79,75,72,69,65,62],
        0: [85,82,79,75,72,69,65,62],
        15: [85,82,79,75,72,69,65,62],
        25: [85,82,79,75,72,69,65,62],
        50: [85,82,79,75,72,69,65,62]
    },

    'spacing': 2000
}

var takeoffROCVyMatrix = {
    //takeoffROCVyMatrix[weight][Temp][Alt/2000ft]   //OBS, this is 2000 ft spacing
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [308,318,328,348,348,359,371,382,395,408,421],
        0: [334,344,355,377,377,389,402,415,428,442,457],
        15: [349,358,367,385,385,395,405,416,427,438,450],
        25: [359,370,382,406,406,419,432,446,461,476,492],
        50: [384,396,408,434,434,448,463,478,494,510,527]
    },
    
    //1080kg
    1080: {
        '-25': [271,279,288,306,306,315,325,336,347,358,370],
        0: [293,302,311,331,331,342,353,364,376,388,401],
        15: [306,314,322,338,338,347,356,365,375,385,395],
        25: [315,325,335,356,356,368,380,392,405,418,432],
        50: [337,348,358,381,381,394,406,420,434,448,463]
    },
    
    //930kg
    930: {
        '-25': [233,240,248,263,263,272,280,289,299,308,319],
        0: [252,260,268,285,285,294,304,313,324,334,346],
        15: [264,270,277,291,291,299,307,315,323,331,340],
        25: [271,280,288,307,307,317,327,338,349,360,372],
        50: [290,299,309,328,328,339,350,361,373,386,399]
    },

    'spacing': 2000
}

var takeoffClimbVxMatrix = {   //Contains duplicate data, interpolation btw temp not necessary
    //takeoffClimbVxMatrix[weight][Temp][Alt/2000ft]   //OBS, this is 2000 ft spacing
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [1214,1147,1080,1013,946,879,813,746],
        0: [1037,972,906,841,776,710,645,580],
        15: [941,888,836,783,731,678,626,574],
        25: [880,816,751,687,623,560,496,432],
        50: [738,675,612,549,486,424,361,299]
    },
    
    //1080kg
    1080: {
        '-25': [1283,1214,1145,1076,1008,939,871,803],
        0: [1102,1034,967,900,833,766,699,632],
        15: [1002,949,895,841,787,733,679,625],
        25: [940,874,808,742,676,611,545,480],
        50: [794,729,664,600,535,471,407,342]
    },
    
    //930kg
    930: {
        '-25': [1435,1362,1289,1216,1144,1071,999,927],
        0: [1243,1172,1101,1030,958,888,817,746],
        15: [1138,1081,1024,967,910,853,796,739],
        25: [1072,1002,932,863,793,724,654,585],
        50: [918,849,780,712,644,576,508,440]
    },

    'spacing': 2000
}

var takeoffROCVxMatrix = {
    //takeoffROCVxMatrix[weight][Temp][Alt/1000ft]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [1214,1147,1080,1013,946,879,813,746],
        0: [1037,972,906,841,776,710,645,580],
        15: [941,888,836,783,731,678,626,574],
        25: [880,816,751,687,623,560,496,432],
        50: [738,675,612,549,486,424,361,299]
    },
    
    //1080kg
    1080: {
        '-25': [1283,1214,1145,1076,1008,939,871,803],
        0: [1102,1034,967,900,833,766,699,632],
        15: [1002,949,895,841,787,733,679,625],
        25: [940,874,808,742,676,611,545,480],
        50: [794,729,664,600,535,471,407,342]
    },
    
    //930kg
    930: {
        '-25': [1435,1362,1289,1216,1144,1071,999,927],
        0: [1243,1172,1101,1030,958,888,817,746],
        15: [1138,1081,1024,967,910,853,796,739],
        25: [1072,1002,932,863,793,724,654,585],
        50: [918,849,780,712,644,576,508,440,]
    },

    'spacing': 1000
}

var climbVyMatrix = {   //Contains duplicate data, interpolation btw temp not necessary
    //ClimbVyMatrix[weight][Temp][Alt/2000ft]   //OBS, this is 2000 ft spacing
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [84,83,81,80,78,77,75,73],
        0: [84,83,81,80,78,77,75,73],
        15: [84,83,81,80,78,77,75,73],
        25: [84,83,81,80,78,77,75,73],
        50: [84,83,81,80,78,77,75,73]
    },
    
    //1080kg
    1080: {
        '-25': [83,82,80,78,76,74,72,70],
        0: [83,82,80,78,76,74,72,70],
        15: [83,82,80,78,76,74,72,70],
        25: [83,82,80,78,76,74,72,70],
        50: [83,82,80,78,76,74,72,70]
    },
    
    //930kg
    930: {
        '-25': [82,81,79,77,75,73,71,69],
        0: [82,81,79,77,75,73,71,69],
        15: [82,81,79,77,75,73,71,69],
        25: [82,81,79,77,75,73,71,69],
        50: [82,81,79,77,75,73,71,69]
    },

    'spacing': 2000
}

var climbVxMatrix = {   //Contains duplicate data, interpolation btw temp not necessary
    //climbVxMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [72,72,72,72,72,72,71,71],
        0: [72,72,72,72,72,72,71,71],
        15: [72,72,72,72,72,72,71,71],
        25: [72,72,72,72,72,72,71,71],
        50: [72,72,72,72,72,72,71,71]
    },
    
    //1080kg
    1080: {
        '-25': [72,72,72,72,71,71,71,71],
        0: [72,72,72,72,71,71,71,71],
        15: [72,72,72,72,71,71,71,71],
        25: [72,72,72,72,71,71,71,71],
        50: [72,72,72,72,71,71,71,71]
    },
    
    //930kg
    930: {
        '-25': [72,72,71,71,71,71,71,70],
        0: [72,72,71,71,71,71,71,70],
        15: [72,72,71,71,71,71,71,70],
        25: [72,72,71,71,71,71,71,70],
        50: [72,72,71,71,71,71,71,70]
    },

    'spacing': 1000
};

var climbVxSeMatrix = {
    //ClimbVxSeMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [83,82,81,81,80,79,78,77],
        0: [83,82,81,81,80,79,78,77],
        15: [83,82,81,81,80,79,78,77],
        25: [83,82,81,81,80,79,78,77],
        50: [83,82,81,81,80,79,78,77]
    },
    
    //1080kg
    1080: {
        '-25': [79,79,79,79,79,78,78,78],
        0: [79,79,79,79,79,78,78,78],
        15: [79,79,79,79,79,78,78,78],
        25: [79,79,79,79,79,78,78,78],
        50: [79,79,79,79,79,78,78,78]
    },
    
    //930kg
    930: {
        '-25': [78,78,78,78,78,78,77,77],
        0: [78,78,78,78,78,78,77,77],
        15: [78,78,78,78,78,78,77,77],
        25: [78,78,78,78,78,78,77,77],
        50: [78,78,78,78,78,78,77,77]
    },

    'spacing': 1000
};

var climbVySeMatrix = {   //Contains duplicate data, interpolation btw temp not necessary
    //ClimbVySeMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [84,83,82,81,80,79,79,78],
        0: [84,83,82,81,80,79,79,78],
        15: [84,83,82,81,80,79,79,78],
        25: [84,83,82,81,80,79,79,78],
        50: [84,83,82,81,80,79,79,78]
    },
    
    //1080kg
    1080: {
        '-25': [80,80,79,79,79,79,78,78],
        0: [80,80,79,79,79,79,78,78],
        15: [80,80,79,79,79,79,78,78],
        25: [80,80,79,79,79,79,78,78],
        50: [80,80,79,79,79,79,78,78]
    },
    
    //930kg
    930: {
        '-25': [79,79,79,78,78,78,78,77],
        0: [79,79,79,78,78,78,78,77],
        15: [79,79,79,78,78,78,78,77],
        25: [79,79,79,78,78,78,78,77],
        50: [79,79,79,78,78,78,78,77]
    },

    'spacing': 1000
};

var ROCVyMatrix = {
    //ROCVyMatrix[weight][Temp][Alt/2000ft]     //OBS 2000ft spacing

    //1230kg (max takeoff weight)
    1230: {
        '-25': [1317,1179,1041,904,767,631,495,360,],
        0: [1135,1000,865,731,598,464,332,199,],
        15: [1036,928,819,711,603,495,387,279,],
        25: [973,841,709,577,446,316,186,56,],
        50: [827,697,568,439,310,182,54,-73,]
    },
    
    //1080kg
    1080: {
        '-25': [1560,1408,1257,1106,956,807,657,509],
        0: [1360,1212,1064,917,770,624,478,333],
        15: [1251,1132,1014,895,776,658,539,420],
        25: [1182,1037,892,748,604,461,318,175],
        50: [1022,879,737,595,454,314,173,34]
    },
    
    //930kg
    930: {
        '-25': [1873,1703,1533,1364,1196,1028,860,693],
        0: [1649,1483,1317,1151,987,823,659,496],
        15: [1527,1393,1260,1127,994,861,727,594],
        25: [1449,1286,1124,962,800,639,479,319],
        50: [1269,1109,950,791,632,474,317,160]
    },

    'spacing': 2000
};

var ROCVxMatrix = {
    //ROCVxMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [1241,1177,1114,1050,986,923,860,797],
        0: [1073,1011,949,887,825,763,701,639],
        15: [982,932,882,832,782,732,682,632],
        25: [924,863,802,741,680,619,559,498],
        50: [789,729,669,609,550,490,431,371]
    },
    
    //1080kg
    1080: {
        '-25': [1480,1410,1340,1269,1199,1129,1059,990],
        0: [1295,1226,1158,1089,1020,952,884,815],
        15: [1194,1139,1084,1029,973,918,863,808],
        25: [1130,1062,995,928,861,794,727,660],
        50: [981,915,848,782,717,651,585,520]
    },
    
    //930kg
    930: {
        '-25': [1787,1707,1628,1549,1470,1391,1312,1233],
        0: [1578,1500,1422,1345,1268,1190,1113,1036],
        15: [1463,1401,1339,1277,1215,1153,1090,1028],
        25: [1391,1315,1239,1163,1087,1012,936,861],
        50: [1223,1148,1074,999,925,851,777,703]
    },

    'spacing': 1000
};

var ROCVxSeMatrix = {
    //RateOfClimbVxSeMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [325,288,251,214,177,140,103,66],
        0: [227,191,155,118,82,46,10,-26],
        15: [174,145,116,86,57,28,-1,-30],
        25: [140,104,69,33,-2,-38,-73,-108],
        50: [61,26,-9,-44,-78,-113,-148,-183]
    },
    
    //1080kg
    1080: {
        '-25': [424,385,346,307,268,229,190,152],
        0: [321,283,245,207,169,131,93,55],
        15: [265,234,204,173,143,112,81,51],
        25: [229,192,155,117,80,43,6,-31],
        50: [147,110,73,37,0,-36,-73,-109]
    },
    
    //930kg
    930: {
        '-25': [556,513,469,426,383,340,298,255],
        0: [442,400,358,316,274,232,190,148],
        15: [380,346,312,279,245,211,177,143],
        25: [341,299,258,217,176,134,93,52],
        50: [249,209,168,128,87,47,7,-34]
    },

    'spacing': 1000
};

var ROCVySeMatrix = {
    //rateOfClimbVySeMatrix[weight][Temp][Alt(/1000ft)]
    //1230 kg (Max takeoff weight)
    1230: {
        '-25': [330,292,254,216,179,141,104,67],
        0: [230,193,157,120,83,46,10,-27],
        // 15: [176,147,117,87,58,28,-1,-31],
        25: [142,106,69,33,-3,-38,-74,-110],
        50: [62,26,-9,-44,-80,-115,-150,-185]
    },

    //1080kg
    1080: {
        '-25': [436,396,355,315,275,234,194,154],
        0: [330,290,251,211,172,132,93,54],
        // 15: [271,240,208,176,145,113,81,50],
        25: [235,196,157,118,80,41,3,-35],
        50: [149,111,73,35,-3,-41,-78,-116]
    },
    
    //930kg
    930: {
        '-25': [574,529,483,438,393,348,304,259],
        0: [455,411,367,322,278,235,191,147],
        // 15: [390,355,319,284,248,213,178,142],
        25: [349,305,262,219,176,133,90,47],
        50: [253,211,168,126,83,41,-1,-43]
    },

    'spacing': 1000
};

var FCmatrix = {
    //0 ft
    0: {
        1900: {
            '-15': {20: 9.6, 22: 11.4, 24: 14.9, 26: 17.1},
            15: {20: 9.1, 22: 10.8, 24: 14.1, 26: 16.2},
            45: {20: 8.7, 22: 10.2, 24: 13.4, 26: 15.4}
        },
        2100: {
            '-15': {20: 10.2, 22: 12.1, 24: 16, 26: 18.5, 28: 23.5},
            15: {20: 9.7, 22: 11.5, 24: 15.1, 26: 17.5, 28: 22.2},
            45: {20: 9.2, 22: 10.9, 24: 14.4, 26: 16.7, 28: 21.1}
        },
        2250: {
            '-15': {20: 11, 22: 12.8, 24: 16.6, 26: 19.2, 28: 24.5, 29.5: 28.6},
            15: {20: 10.4, 22: 12.1, 24: 15.7, 26: 18.2, 28: 23.2, 29.5: 27.1},
            45: {20: 9.9, 22: 11.5, 24: 14.9, 26: 17.3, 28: 22, 29.5: 25.8}
        }
    },
    //3000ft
    3000: {
        1900: {
            '-15': {20: 11.7, 22: 14.1, 24: 17.7, 26: 20.9, 26.4: 21.9},
            15: {20: 11.1, 22: 13.3, 24: 16.7, 26: 19.8, 26.6: 20.7},
            45: {20: 10.6, 22: 12.6, 24: 15.9, 26: 18.8, 26.6: 19.6}
        },
        2100: {
            '-15': {20: 12.6, 22: 15.2, 24: 19.2, 26: 22.8, 26.4: 23.9},
            15: {20: 11.9, 22: 14.3, 24: 18.1, 26: 21.6, 26.4: 22.6},
            45: {20: 11.3, 22: 13.6, 24: 17.2, 26: 20.5, 26.4: 21.4}
        },
        2250: {
            '-15': {20: 13.4, 22: 16, 24: 20, 26: 23.9, 26.4: 25},
            15: {20: 12.7, 22: 15.1, 24: 18.9, 26: 22.6, 26.4: 23.6},
            45: {20: 12.1, 22: 14.3, 24: 18, 26: 21.5, 26.4: 22.4}
        },
        2388: {
            '-15': {26.4: 25.7},
            15: {26.4: 24.3},
            45: {26.4: 23.1}
        }
    },
    //6000ft
    6000: {
        1900: {
            '-15': {18: 11.9, 20: 13.9, 22: 16.8, 23.6: 19.8},
            15: {18: 10.9, 20: 13.1, 22: 15.8, 23.6: 18.7},
            45: {18: 10.4, 20: 12.4, 22: 15, 23.6: 17.8}
        },
        2100: {
            '-15': {18: 12.4, 20: 15, 22: 18.2, 23.6: 21.6},
            15: {18: 11.7, 20: 14.1, 22: 17.2, 23.6: 20.4},
            45: {18: 11.1, 20: 13.4, 22: 16.4, 23.6: 19.4}
        },
        2250: {
            '-15': {18: 12.9, 20: 15.8, 22: 19.8, 23.6: 22.6},
            15: {18: 12.2, 20: 14.9, 22: 18.1, 23.6: 21.4},
            45: {18: 11.6, 20: 14.2, 22: 17.2, 23.6: 20.3}
        },
        2388: {
            '-15': {23.6: 23.3},
            15: {23.6: 22},
            45: {23.6: 20.9}
        }
    },
    //9000ft
    9000: {
        1900: {
            '-15': {18: 13.2, 20: 16, 21.1: 17.8},
            15: {18: 12.4, 20: 15.1, 21.1: 16.8},
            45: {18: 11.8, 20: 14.3, 21.1: 15.9}
        },
        2100: {
            '-15': {18: 14.2, 20: 17.4, 21.1: 19.4},
            15: {18: 13.4, 20: 16.4, 21.1: 18.3},
            45: {18: 12.7, 20: 15.6, 21.1: 17.4}
        },
        2250: {
            '-15': {18: 14.9, 20: 18.3, 21.1: 10.3},
            15: {18: 14, 20: 17.2, 21.1: 19.2},
            45: {18: 13.3, 20: 16.3, 21.1: 28.2}
        },
        2388: {
            '-15': {21.1: 20.9},
            15: {21.1: 19.7},
            45: {21.1: 18.7}
        }
    },
    //12000ft
    12000: {
        1900: {
            '-15': {18: 14.8, 18.8: 15.9},
            15: {18: 13.9, 18.8: 15},
            45: {18: 13.2, 18.8: 14.2}
        },
        2100: {
            '-15': {18: 16.1, 18.8: 17.4},
            15: {18: 15.2, 18.8: 16.4},
            45: {18: 14.4, 18.8: 15.5}
        },
        2250: {
            '-15': {18: 16.8, 18.8: 18.2},
            15: {18: 15.9, 18.8: 17.2},
            45: {18: 15, 18.8: 16.3}
        },
        2388: {
            '-15': {18.8: 18.8},
            15: {18.8: 17.7},
            45: {18.8: 16.7}
        }
    }
}

var KTASmatrix = {
    //0 ft
    0: {
        1900: {
            '-15': {20: 89, 22: 97, 24: 110, 26: 117},
            15: {20: 88, 22: 97, 24: 111, 26: 118},
            45: {20: 85, 22: 96, 24: 111, 26: 119}
        },
        2100: {
            '-15': {20: 92, 22: 100, 24: 114, 26: 121, 28: 132},
            15: {20: 91, 22: 100, 24: 114, 26: 122, 28: 134},
            45: {20: 89, 22: 100, 24: 115, 26: 123, 28: 135}
        },
        2250: {
            '-15': {20: 96, 22: 103, 24: 115, 26: 122, 28: 134, 29.5: 143},
            15: {20: 95, 22: 103, 24: 116, 26: 124, 28: 136, 29.5: 145},
            45: {20: 94, 22: 103, 24: 117, 26: 125, 28: 138, 29.5: 146}
        }
    },
    //3000ft
    3000: {
        1900: {
            '-15': {20: 101, 22: 110, 24: 121, 26: 130, 26.4: 132},
            15: {20: 101, 22: 110, 24: 122, 26: 131, 26.4: 134},
            45: {20: 100, 22: 110, 24: 123, 26: 132, 26.4: 135}
        },
        2100: {
            '-15': {20: 104, 22: 114, 24: 125, 26: 134, 26.4: 137},
            15: {20: 104, 22: 114, 24: 127, 26: 136, 26.4: 138},
            45: {20: 104, 22: 115, 24: 128, 26: 137, 26.4: 140}
        },
        2250: {
            '-15': {20: 108, 22: 116, 24: 128, 26: 137, 26.4: 139},
            15: {20: 108, 22: 117, 24: 129, 26: 138, 26.4: 141},
            45: {20: 108, 22: 118, 24: 130, 26: 140, 26.4: 143}
        },
        2388: {
            '-15': {26.4: 141},
            15: {26.4: 143},
            45: {26.4: 144}
        }
    },
    //6000ft
    6000: {
        1900: {
            '-15': {18: 102, 20: 112, 22: 122, 23.6: 130},
            15: {18: 102, 20: 112, 22: 123, 23.6: 132},
            45: {18: 100, 20: 112, 22: 123, 23.6: 133}
        },
        2100: {
            '-15': {18: 106, 20: 116, 22: 126, 23.6: 135},
            15: {18: 106, 20: 116, 22: 127, 23.6: 137},
            45: {18: 105, 20: 117, 22: 128, 23.6: 138}
        },
        2250: {
            '-15': {18: 108, 20: 119, 22: 129, 23.6: 138},
            15: {18: 108, 20: 120, 22: 130, 23.6: 139},
            45: {18: 107, 20: 120, 22: 131, 23.6: 141}
        },
        2388: {
            '-15': {23.6: 139},
            15: {23.6: 141},
            45: {23.6: 142}
        }
    },
    //9000ft
    9000: {
        1900: {
            '-15': {18: 112, 20: 122, 21.1: 128},
            15: {18: 112, 20: 123,21.1: 129},
            45: {18: 111, 20: 123,21.1: 130}
        },
        2100: {
            '-15': {18: 116, 20: 127, 21.1: 133},
            15: {18: 116, 20: 128, 21.1: 134},
            45: {18: 116, 20: 128, 21.1: 135}
        },
        2250: {
            '-15': {18: 118, 20: 130, 21.1: 136},
            15: {18: 119, 20: 131, 21.1: 137},
            45: {18: 118, 20: 131, 21.1: 138}
        },
        2388: {
            '-15': {21.1: 137},
            15: {21.1: 139},
            45: {21.1: 140}
        }
    },
    //12000ft
    12000: {
        1900: {
            '-15': {18: 121, 18.8: 125},
            15: {18: 121, 18.8: 126},
            45: {18: 121, 18.8: 126}
        },
        2100: {
            '-15': {18: 126, 18.8: 130},
            15: {18: 126, 18.8: 131},
            45: {18: 126, 18.8: 132}
        },
        2250: {
            '-15': {18: 129, 18.8: 133},
            15: {18: 129, 18.8: 134},
            45: {18: 129, 18.8: 134}
        },
        2388: {
            '-15': {18.8: 135},
            15: {18.8: 136},
            45: {18.8: 136}
        }
    }
}

var PWRmatrix = {
    //0 ft
    0: {
        1900: {
            '-15': {20: 35, 22: 41, 24: 53, 26: 61},
            15: {20: 33, 22: 39, 24: 50, 26: 58},
            45: {20: 31, 22: 37, 24: 48, 26: 55}
        },
        2100: {
            '-15': {20: 37, 22: 43, 24: 57, 26: 66, 28: 84},
            15: {20: 35, 22: 41, 24: 54, 26: 63, 28: 80},
            45: {20: 33, 22: 39, 24: 52, 26: 60, 28: 76}
        },
        2250: {
            '-15': {20: 39, 22: 46, 24: 59, 26: 69, 28: 88, 29.5: 103},
            15: {20: 37, 22: 43, 24: 56, 26: 65, 28: 83, 29.5: 97},
            45: {20: 35, 22: 41, 24: 53, 26: 62, 28: 79, 29.5: 92}
        }
    },
    //3000ft
    3000: {
        1900: {
            '-15': {20: 42, 22: 50, 24: 63, 26: 75, 26.4: 78},
            15: {20: 40, 22: 48, 24: 60, 26: 71, 26.4: 74},
            45: {20: 38, 22: 45, 24: 57, 26: 67, 26.4: 70}
        },
        2100: {
            '-15': {20: 45, 22: 54, 24: 69, 26: 82, 26.4: 85},
            15: {20: 43, 22: 51, 24: 65, 26: 77, 26.4: 81},
            45: {20: 41, 22: 49, 24: 62, 26: 73, 26.4: 77}
        },
        2250: {
            '-15': {20: 48, 22: 57, 24: 72, 26: 85, 26.4: 89},
            15: {20: 45, 22: 54, 24: 68, 26: 81, 26.4: 85},
            45: {20: 43, 22: 51, 24: 64, 26: 77, 26.4: 80}
        },
        2388: {
            '-15': {26.4: 92},
            15: {26.4: 87},
            45: {26.4: 83}
        }
    },
    //6000ft
    6000: {
        1900: {
            '-15': {18: 41, 20: 50, 22: 60, 23.6: 71},
            15: {18: 39, 20: 47, 22: 57, 23.6: 67},
            45: {18: 37, 20: 44, 22: 54, 23.6: 64}
        },
        2100: {
            '-15': {18: 44, 20: 54, 22: 65, 23.6: 77},
            15: {18: 42, 20: 51, 22: 62, 23.6: 73},
            45: {18: 40, 20: 48, 22: 59, 23.6: 69}
        },
        2250: {
            '-15': {18: 46, 20: 57, 22: 68, 23.6: 81},
            15: {18: 44, 20: 54, 22: 65, 23.6: 76},
            45: {18: 41, 20: 51, 22: 61, 23.6: 73}
        },
        2388: {
            '-15': {23.6: 83},
            15: {23.6: 79},
            45: {23.6: 75}
        }
    },
    //9000ft
    9000: {
        1900: {
            '-15': {18: 47, 20: 57, 21.1: 64},
            15: {18: 44, 20: 54, 21.1: 60},
            45: {18: 42, 20: 51, 21.1: 57}
        },
        2100: {
            '-15': {18: 51, 20: 62, 21.1: 69},
            15: {18: 48, 20: 59, 21.1: 65},
            45: {18: 46, 20: 56, 21.1: 62}
        },
        2250: {
            '-15': {18: 53, 20: 65, 21.1: 73},
            15: {18: 50, 20: 62, 21.1: 69},
            45: {18: 48, 20: 58, 21.1: 65}
        },
        2388: {
            '-15': {21.1: 75},
            15: {21.1: 71},
            45: {21.1: 67}
        }
    },
    //12000ft
    12000: {
        1900: {
            '-15': {18: 53, 18.8: 57},
            15: {18: 50, 18.8: 54},
            45: {18: 47, 18.8: 41}
        },
        2100: {
            '-15': {18: 58, 18.8: 62},
            15: {18: 54, 18.8: 59},
            45: {18: 51, 18.8: 56}
        },
        2250: {
            '-15': {18: 60, 18.8: 65},
            15: {18: 57, 18.8: 61},
            45: {18: 54, 18.8: 58}
        },
        2388: {
            '-15': {18.8: 67},
            15: {18.8: 63},
            45: {18.8: 60}
        }
    }
}