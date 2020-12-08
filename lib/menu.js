  exports.menu = (id, BotName, tampilTanggal, tampilWaktu, instagram, whatsapp, kapanbotaktif) => {
	return ` 🤖 *${BotName}* 🤖
  
*${tampilTanggal}* 
*${tampilWaktu}* 

*Command*

!sticker
_${BotName}_ akan membuatkan sticker dari gambar yang kamu kirimkan
Pengggunaan : Kirimkan gambarmu dengan caption !sticker

!igstalk
_${BotName}_ untuk mengambil data instagram Full Info

!ocr
_${BotName}_ untuk melihat text dari gambar yang kamu kirimkan

Pengggunaan : Kirimkan gambarmu dengan caption !ocr

!pantun
_${BotName}_ akan mengirimkanmu pantun secara random

!animepict
_${BotName}_akan mengirimkanmu gambar anime secara random

!nulis <teks>
_${BotName}_ akan menuliskan teks yang kamu kirimkan
Contoh: !nulis pasti nana bangka dadang ko bang jamping jamping 

!quotes
_${BotName}_ akan mencarikanmu quotes secara random

!pict <cewek/cowok>
_${BotName}_ akan mengirimkanmu gambar cewek/cowok secara random
Contoh: !pict cowok

!say <teks>
_${BotName}_ akan mengirimkan kembali teks yang kamu kirimkan
Contoh: !say buset bang

!lirik <penyanyi-judul lagu>
_${BotName}_ akan mengirimkanmu lirik lagu yang kamu inginkan
contoh : !lirik Lisa-Gurenge

!alay <teks>
_${BotName}_ akan mengubah teks yang kamu kirimkan menjadi alay
contoh : !alay ampun bang jago


*Islam*

!sholat <daerah>
_${BotName}_ akan mengirimkan jadwal sholat sesuai dengan daerah yang kamu kirimkan
Penggunaan 	: !sholat + daerah kamu
Contoh		: !sholat Bekasi

!quran
_${BotName}_ akan mengirimkanmu ayat Al-Quran secara random

*Downloader*

!ytmp4 <link>
_${BotName}_ akan mendownloadkan video youtube sesuai dengan link yang kamu kirimkan.
Contoh: !ytmp4 https://youtu.be/linkamu

!ytmp3 <link>
_${BotName}_ akan mengubah video youtube menjadi audio sesuai dengan link yang kamu kirimkan
Contoh: !ytmp3 https://youtu.be/linkamu

!twt <link>
_${BotName}_ akan mengirimkanmu foto/video dari link ig yang kamu kirimkan
Contoh: !twt https://twitter.com/linkamu

!tiktok <link>
_${BotName}_ akan mengirimkanmu video dari link tiktok yang kamu kirimkan

*Education*

!wiki <yang kamu cari>
Contoh: !wiki Adolf Hitler

!covid
menampilkan data tentang COVID-19 di Indonesia

*Primbon*

!nama <namakamu>
Contoh : !nama Adit

!pasangan <namamu & pasangan>
Contoh : !pasangan covad & covid

Instagram : ${instagram}
WhatsApp : ${whatsapp}
`
}
