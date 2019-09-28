// 객체 리터럴 방식

const counter = {
  // 카운트
  cnt: 0,

  // 카운트 상태확인
  getCount: function() {
    return this.cnt;
  },

  // 카운트 증가
  increment: function(number) {
    if (typeof number === 'number') {
      for (let i = 1; i <= number; i++) {
        this.cnt++;
      }

      return this.getCount();
    }

    if (!number) {
      return ++this.cnt;
    }

    return `${number} 는 잘못된 값입니다.`;
  },

  // 카운트 감소
  decrement: function(number) {
    if (typeof number === 'number') {
      for (let i = 1; i <= number; i++) {
        this.cnt--;
      }

      return this.getCount();
    }
    if (!number) {
      return --this.cnt;
    }

    return `${number} 는 잘못된 값입니다.`;
  },
};


// 생성자 함수 방식

const counter = {
  // 카운트
  cnt: 0,
};
// 카운트 상태확인
function getCount() {
  return counter.cnt;
}

// 카운트 증가
function Increment(number) {
  // 매개변수 값 만큼 증가
  if (typeof number === 'number') {
    for (let i = 1; i <= number; i++) {
      counter.cnt++;
    }

    this.status = getCount();
  }

  // 기본 증가
  if (!number) {
    this.status = ++counter.cnt;
  }
}

// 카운트 감소
function Decrement(number) {
  // 매개변수 값 만큼 감소
  if (typeof number === 'number') {
    for (let i = 1; i <= number; i++) {
      counter.cnt--;
    }

    this.status = getCount();
  }

  // 기본 감소
  if (!number) {
    this.status = --counter.cnt;
  }
}


// class 방식
class Counter {
  
  constructor() {
    this.cnt = 0
  }

  getCount() {
    return Counter.cnt;
  }

  increment(count) {
    if (typeof count === 'number') {
      for (let i = 1; i <= count; i++) {
        Counter.cnt += 1;
      }
    }

    if (count === undefined) {
      return Counter.cnt += 1;
    }

    return `${count} 는 잘못된 값입니다.`;
  }
  
  decrement(count) {
    if (typeof count === 'number') {
      for (let i = 1; i <= count; i++) {
        counter.cnt--;
      }
  
      this.status = getCount();
    }
  
    // 기본 감소
    if (!count) {
      this.status = --counter.cnt;
    }
  }
}