'use strict';

import dc from 'damage-calc';

const root = document.getElementById('root');
root.innerHTML = `<p>攻撃力 100, 防御力 50, 防御貫通 30のダメージは、${dc.effectiveDamage(100, 50, 30)}</p>`;