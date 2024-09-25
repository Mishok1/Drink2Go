const modifyTextAmount = (multiplier, selectors) => {
  const $els = [...document.querySelectorAll(selectors.join(','))].flatMap((el) => [...el.childNodes]);
  for (const $el of $els) {
    if ($el.nodeType !== $el.TEXT_NODE) {
      continue;
    }
    if (!$el.textContent) {
      continue;
    }

    const text = $el.textContent;

    // Умножим строку на меньшее целое число множителя
    const intCnt = Math.floor(multiplier);
    $el.textContent = Array.from({ length: intCnt })
      .map(() => text)
      .join('');

    // Добавим остаток строки из множителя
    const tailMultiplier = multiplier % 1;
    $el.textContent += text.slice(0, Math.floor(text.length * tailMultiplier));
  }
};

const modifyChildrenAmount = (multiplier, selectors) => {
  const $els = [...document.querySelectorAll(selectors.join(','))];
  const getRandomIntBetween = (min, max, seed = 0.5) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(seed * (max - min + 1) + min);
  };
  for (const $el of $els) {
    if ($el.nodeType !== $el.ELEMENT_NODE) {
      throw new Error(
        `По одному из селекторов «${selectors.join('», «')}» найден элемент с неверным nodeType равным ${$el.nodeType}`
      );
    }
    if ($el.childElementCount < 2) {
      continue;
    }
    const newLength = Math.ceil($el.childElementCount * multiplier);

    if (newLength === $el.childElementCount) {
      continue;
    }
    while ($el.childElementCount !== newLength) {
      const idx = getRandomIntBetween(0, $el.childElementCount - 1);
      const $child = $el.children[idx];
      if (newLength < $el.childElementCount) {
        $el.removeChild($child);
      } else if (newLength > $el.childElementCount) {
        $el.appendChild($child.cloneNode(true));
      }
    }
  }
};

const modifyImages = (isBig, selectors) => {
  const $els = [...document.querySelectorAll(selectors.join(','))];
  for (const $el of $els) {
    if ($el.tagName !== 'IMG') {
      throw new Error(
        `По одному из селекторов «${selectors.join('», «')}» найден элемент с неверным tagName равным ${
          $el.tagName
        }, должен быть IMG`
      );
    }
    // 1500x1500
    const largeImgSrc =
      'data:image/png;base64,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';
    // 15x15
    const smallImgSrc =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAAG1BMVEXMzMyWlpaqqqq3t7ejo6OcnJyxsbG+vr7FxcXPXVcRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAN0lEQVQImWNgIAswKTMwcAQoGTAwAznMAgYMDCxhbOYMAq4JDOyFHA4MAuUCDGxqIJGkBGLMAwAMYQT0Tdpz9wAAAABJRU5ErkJggg==';
    const portraitImgSrc =
      'data:image/png;base64,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';
    const landscapeImgSrc =
      'data:image/png;base64,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';
    $el.src = isBig ? largeImgSrc : smallImgSrc;
    $el.width = isBig ? 1500 : 15;
  }
};

const defaultTextIncreaseMultiplier = 2.1;
const defaultTextDecreaseMultiplier = 0.4;

const defaultChildrenIncreaseMultiplier = 1.5;
const defaultChildrenDecreaseMultiplier = 0.5;

const defaultTextSelectors = ['a', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'legend', 'li'];
const defaultChildrenSelectors = ['section', 'article', 'ul', 'ol', 'dl'];
const defaultImgSelectors = ['img'];

module.exports = async (page, scenario, vp) => {
  console.log(`SCENARIO > ${ scenario.label}`);
  // add more ready handlers here...
  await page.waitForFunction(() => document.fonts.ready.then(() => {
    console.log('Fonts loaded');
    return true;
  }));

  await page.evaluate(modifyImages, true, defaultImgSelectors);
};
