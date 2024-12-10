function calculateBMI() {

    //getElementById:
    //指定されたid値を持つ要素をElementオブジェクトとして返す。
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;

    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").textContent = "正しい値を入力してください。";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    if (18.5 <= bmi) {
        if (bmi < 25) {
            document.getElementById("advice").textContent = "普通体重だよ。健康だね！\
            やったね^^これからもその調子だよーちなみにBMIは健康を測る指標のうちの１つに\
            過ぎないので、高みを目指すなら体脂肪率や骨密度も調べてみようね！！";
        } else {
            document.getElementById("advice").textContent = "あれれ、肥満体重だよ。\
            食欲のアクセル踏みすぎた？食欲の秋はもう過ぎたよ！あー分かった冬眠の予定があるんだね納得。\
            健康度は体重だけで決まるものではない！ただし食生活にやましさがあるなら病気になる前に\
            いち早く改善することをおすすめするぜ！";
        }
    } else {
        document.getElementById("advice").textContent = "わあびっくり、低体重だよ。\
        もっとたくさん食べようね！おにぎり作ってあげようか？\
        私のおすすめはツナマヨだよーその次はしゃけ。さかながすきなのばれた？";
    }

    //小数点以下2桁までで四捨五入
    document.getElementById("result").textContent = `あなたのBMIは ${bmi.toFixed(2)} です。`;
}

const calculateButton = document.getElementById("calculate");

calculateButton.onclick = calculateBMI;
