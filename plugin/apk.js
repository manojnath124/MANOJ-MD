const _0x3dd451=_0x4708;function _0x4708(_0x53f18a,_0x468ae5){const _0x12d6fa=_0x12d6();return _0x4708=function(_0x470825,_0x3083df){_0x470825=_0x470825-0x15c;let _0x1f1297=_0x12d6fa[_0x470825];return _0x1f1297;},_0x4708(_0x53f18a,_0x468ae5);}(function(_0x13681b,_0x2135a0){const _0x4c3691=_0x4708,_0x17af6f=_0x13681b();while(!![]){try{const _0x3239dd=-parseInt(_0x4c3691(0x171))/0x1*(parseInt(_0x4c3691(0x163))/0x2)+parseInt(_0x4c3691(0x16f))/0x3+-parseInt(_0x4c3691(0x172))/0x4+parseInt(_0x4c3691(0x176))/0x5+-parseInt(_0x4c3691(0x16d))/0x6*(parseInt(_0x4c3691(0x173))/0x7)+-parseInt(_0x4c3691(0x170))/0x8*(-parseInt(_0x4c3691(0x168))/0x9)+-parseInt(_0x4c3691(0x15c))/0xa;if(_0x3239dd===_0x2135a0)break;else _0x17af6f['push'](_0x17af6f['shift']());}catch(_0x574f7b){_0x17af6f['push'](_0x17af6f['shift']());}}}(_0x12d6,0x675d3));function _0x12d6(){const _0x59ad40=['.apk','Please\x20provide\x20an\x20app\x20name','*_Download\x20Success_*','356463zbCgsb','../command','mime-types','../DATABASE/scraper','key','200766wUrhpw','appname','2340984ICrlMg','152qPJIjr','11iBiCLX','1035264KAoYDh','63shQZJw','path','Error:\x20','2054785hJFTFW','aptoideDl','log','3113420BstmEQ','node-fetch','download','../DATABASE/functions','sendMessage','.apk\x20<app_name>','link','118024kTOJdY','axios'];_0x12d6=function(){return _0x59ad40;};return _0x12d6();}const {cmd,commands}=require(_0x3dd451(0x169)),scraper=require(_0x3dd451(0x16b)),axios=require(_0x3dd451(0x164)),fetch=require(_0x3dd451(0x15d)),{fetchJson,getBuffer}=require(_0x3dd451(0x15f)),{lookup}=require(_0x3dd451(0x16a)),fs=require('fs'),path=require(_0x3dd451(0x174));cmd({'pattern':'apk','desc':'Downloads\x20Apk','use':_0x3dd451(0x161),'react':'📥','category':_0x3dd451(0x15e),'filename':__filename},async(_0x56a7e0,_0x38bde9,_0x450af7,{from:_0x31ba54,quoted:_0x9a5941,body:_0x3f7295,q:_0x478f7c,reply:_0x54b4ca})=>{const _0x1244e8=_0x3dd451,_0x28aa27=_0x478f7c['trim']();if(!_0x28aa27)return _0x54b4ca(_0x1244e8(0x166));_0x54b4ca('_Downloading\x20'+_0x28aa27+'_');try{const _0x4f61c9=await scraper[_0x1244e8(0x177)](_0x28aa27),_0x255c52=await getBuffer(_0x4f61c9[_0x1244e8(0x162)]);if(!_0x255c52||!_0x4f61c9[_0x1244e8(0x16e)])return await _0x56a7e0[_0x1244e8(0x160)](_0x31ba54,{'react':{'text':'❌','key':_0x38bde9[_0x1244e8(0x16c)]}});await _0x56a7e0[_0x1244e8(0x160)](_0x31ba54,{'document':_0x255c52,'caption':'>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ᴍᴀɴᴏᴊ\x20ᴛᴇᴄʜ*','mimetype':'application/vnd.android.package-archive','filename':_0x4f61c9[_0x1244e8(0x16e)]+_0x1244e8(0x165)},{'quoted':_0x38bde9}),await _0x56a7e0[_0x1244e8(0x160)](_0x31ba54,{'react':{'text':'✅','key':_0x38bde9[_0x1244e8(0x16c)]}}),_0x54b4ca(_0x1244e8(0x167));}catch(_0x6b1d77){console[_0x1244e8(0x178)](_0x6b1d77),await _0x56a7e0[_0x1244e8(0x160)](_0x31ba54,{'react':{'text':'❌','key':_0x38bde9[_0x1244e8(0x16c)]}}),_0x54b4ca(_0x1244e8(0x175)+_0x6b1d77['message']);}});
