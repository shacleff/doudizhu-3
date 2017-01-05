/**
 * 单次出牌长度对应规则
 1  -> [单张]
 2  -> [对子, 火箭]
 3  -> [三不带]
 4  -> [三带一, 炸弹]
 5  -> [三带二, 四带一, 五顺]
 6  -> [三带三, 二连飞机不带, 四带二, 三连对, 六顺]
 7  -> [七顺]
 8  -> [八顺, 四连对, 四带两对, 二连飞机带二]
 9  -> [九顺, 三连飞机不带]
 10 -> [十顺, 五连对, 二连飞机带两对]
 11 -> [十一顺]
 12 -> [十二顺, 六连对, 三连飞机带三, 四连飞机不带]
 13 -> [十三顺]
 14 -> [七连对]
 15 -> [五连飞机不带, 三连飞机带三对]
 16 -> [八连对, 四连飞机两]
 18 -> [九连对, 六连飞机不带]
 20 -> [十连对, 四连飞机带四对, 五连飞机带五]
 */
export default {
  1 : ['isDanzhang'],
  2 : ['isDuiZi', 'isHuoJian'],
  3 : ['is3BuDai'],
  4 : ['is3Dai1', 'isZhaDan'],
  5 : ['is3Dai2', 'is4Dai1', 'is5Shun'],
  6 : ['is3Dai3', 'is2LianFeiJiBuDai', 'is4Dai2', 'is3LianDui', 'is6Shun'],
  7 : ['is7Shun'],
  8 : ['is8Shun', 'is4LianDui', 'is4Dai1Dui', 'is2LianFeiJiDai2Ge'],
  9 : [九顺, 三连飞机不带],
  10 : [十顺, 五连对, 二连飞机带两对],
  11 : [十一顺],
  12 : [十二顺, 六连对, 三连飞机带三个, 四连飞机不带],
  13 : [十三顺],
  14 : [七连对],
  15 : [五连飞机不带, 三连飞机带三对],
  16 : [八连对, 四连飞机两个],
  18 : [九连对, 六连飞机不带],
  20 : [十连对, 四连飞机带四对, 五连飞机带五个],
}