
const Master = [
"ᴳᵉᵒⁿʷᵒᵒ ᴷⁱᵐ_건우","LEG건우","건우입니다","ARAW건우",
"(바코드)","subsub/사탕칼리버 클마"];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith(".계산 ")) {
    try {
      replier.reply(eval(msg.substr(4))); } catch(e) {
      replier.reply("수식이 잘못되었습니다.");
      }
  }
  
  //if (msg == "/") replier.reply(isGroupChat);
  if ((room == "가족방" || Master.includes(sender)) && msg.startsWith(".eval "))
  try {
    var speed = Date.now();
    var result = eval(msg.substr(6));
    replier.reply("[Result]\n" + result + "\n\n[Runtime]\n" + (Date.now()-speed) + "ms");
  } catch (e) {
    replier.reply("[Error]\nerrorName: " + e.name
    + "\nerrorMessage: " + e.message
    + "\nerrorLine: #" + e.lineNumber);
  }
  
  
  
  if (msg.startsWith(".따라하기 ")) {
    replier.reply(msg.substr(6));
  }
  if (msg ==".리로드") {
  Api.reload();
}
}
