 //レベルアップ表現集
 function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} //toioが待ってくれる機能

//消すかも
window.toioCommandHandlers = {
'move and turn right': async function(toio) {
// 🔹 ① 前進（約1秒）
const forward1 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);

// 🔹 ② 右回転（約0.5秒）
const turnRight = new Uint8Array([0x02, 0x01, 0x01, 0x10, 0x02, 0x02, 0x10, 0x32]);

// 🔹 ③ 再び前進（約1秒）
const forward2 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);

console.log("🚗 前進1");
await toio.writeValue(forward1);
await delay(1000);

console.log("↪️ 右に回転");
await toio.writeValue(turnRight);
await delay(500);

console.log("🚗 前進2");
await toio.writeValue(forward2);
},

//まっすぐ行き左
'move and turn left': async function(toio) {
const forward1 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);
const turnLeft = new Uint8Array([0x02, 0x01, 0x02, 0x10, 0x02, 0x01, 0x10, 0x32]);
const forward2 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);

console.log("前進1");
await toio.writeValue(forward1);
await delay(1000);

console.log("↩️ 左に回転");
await toio.writeValue(turnLeft);
await delay(500);

console.log("🚗 前進2");
await toio.writeValue(forward2);
},

'go straight and turn right': async function(toio) {
const forward1 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);
const turnRight = new Uint8Array([0x02, 0x01, 0x01, 0x10, 0x02, 0x02, 0x10, 0x32]);
const forward2 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);

console.log("🚗 前進1");
await toio.writeValue(forward1);
await delay(1000);

console.log("↪️ 右に回転");
await toio.writeValue(turnRight);
await delay(500);

console.log("🚗 前進2");
await toio.writeValue(forward2);
},
//まっすぐ行き左
'go straight and turn left': async function(toio) {
const forward1 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);
const turnLeft = new Uint8Array([0x02, 0x01, 0x02, 0x10, 0x02, 0x01, 0x10, 0x32]);
const forward2 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);

console.log("前進1");
await toio.writeValue(forward1);
await delay(1000);

console.log("↩️ 左に回転");
await toio.writeValue(turnLeft);
await delay(500);

console.log("🚗 前進2");
await toio.writeValue(forward2);
},

//左に曲がってまっすぐ進む
'turn left and go straight': async function(toio) {
    const turnLeft = new Uint8Array([0x02, 0x01, 0x02, 0x10, 0x02, 0x01, 0x10, 0x32]);
    const forward1 = new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);

    console.log("左に回転");
    await toio.writeValue(turnLeft);
    await delay(500);

    console.log("前進1");
    await toio.writeValue(forward1);
},

//右に曲がってまっすぐ進む
'turn right and go straight': async function(toio) {
    const turnRight = new Uint8Array([0x02, 0x01, 0x01, 0x10, 0x02, 0x02, 0x10, 0x32]);
    const forward1 =  new Uint8Array([0x02, 0x01, 0x01, 0x32, 0x02, 0x01, 0x32, 0x64]);

    console.log("右に回転");
    await toio.writeValue(turnRight);
    await delay(500);

    console.log("前進1");
    await toio.writeValue(forward1);
},
'yes': async function(toio) {
    const turnRight = new Uint8Array([0x02, 0x01, 0x01, 0x20, 0x02, 0x02, 0x20, 0x28]);
    const turnLeft  = new Uint8Array([0x02, 0x01, 0x02, 0x20, 0x02, 0x01, 0x20, 0x28]);
    const stop      = new Uint8Array([0x02, 0x01, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00]);

    await toio.writeValue(turnRight);
    await delay(400);
    await toio.writeValue(turnLeft);
    await delay(400);
    await toio.writeValue(stop);
  },

};

const h = toioCommandHandlers;

h['avanza y gira a la derecha'] = h['move and turn right'];
h['avanza y gira a la izquierda'] = h['move and turn left'];
h['ve recto y gira a la derecha'] = h['go straight and turn right'];
h['ve recto y gira a la izquierda'] = h['go straight and turn left'];
h['gira a la izquierda y ve recto'] = h['turn left and go straight'];
h['gira a la derecha y ve recto'] = h['turn right and go straight'];
h['앞으로 가서 오른쪽으로 돌아'] = h['move and turn right'];
h['앞으로 가서 왼쪽으로 돌아'] = h['move and turn left'];
h['직진하고 오른쪽으로 돌아'] = h['go straight and turn right'];
h['직진하고 왼쪽으로 돌아'] = h['go straight and turn left'];
h['왼쪽으로 돌고 직진해'] = h['turn left and go straight'];
h['오른쪽으로 돌고 직진해'] = h['turn right and go straight'];
