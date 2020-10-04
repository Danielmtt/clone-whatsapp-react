import React, { Component } from 'react';

import "./style.css";
import AreaMensagens from "../AreaMensagens";
import AreaContatos from "../AreaContatos";

class Whatsapp extends Component {
    
    constructor(){
        super();
        this.state = {
            dados: {
              picture: "http://placehold.it/32x32",
              phone: "+1 (836) 582-2801",
              friends: [
                {
                  id: 0,
                  name: "Sweet Reynolds",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/54.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Fugiat proident mollit labore eiusmod laboris veniam aliqua minim ullamco ea reprehenderit. Et culpa tempor tempor laborum mollit. Esse qui do consequat quis excepteur sunt non aliqua Lorem mollit. Nostrud laboris occaecat incididunt deserunt sit eiusmod culpa do.\r\n",
                      time: "03/12/2019 23:55:40",
                      author: "friend"
                    },
                    {
                      message: "Sit ad reprehenderit adipisicing cillum dolor elit commodo. Proident ipsum ex enim veniam cillum ullamco cillum dolor irure pariatur sunt nulla eu. Nostrud aliquip adipisicing ullamco aute laborum et laborum. Velit occaecat eu consequat ipsum culpa qui irure ipsum. Ex eiusmod dolor id reprehenderit est exercitation eiusmod id cupidatat est ad incididunt nulla. Irure anim sit mollit pariatur aliquip eu ea fugiat nostrud esse minim adipisicing. Minim nostrud quis adipisicing nisi ipsum Lorem reprehenderit laboris duis sunt.\r\n",
                      time: "23/12/2019 13:29:26",
                      author: "sending"
                    },
                    {
                      message: "Aliquip ea ea pariatur aliquip duis aliqua id amet. Do reprehenderit excepteur mollit do. Exercitation sint enim fugiat commodo do duis in eu adipisicing. Ex consequat duis excepteur aliqua deserunt aliqua aliqua proident. Amet ut proident excepteur labore nostrud eiusmod laborum labore cillum exercitation consequat.\r\n",
                      time: "10/05/2019 19:48:15",
                      author: "friend"
                    },
                    {
                      message: "Esse magna qui cillum tempor ipsum excepteur excepteur dolore et aute. Fugiat esse voluptate aliqua labore ea duis duis eiusmod. Magna minim duis labore id irure officia aute ea ea laborum est. Voluptate proident cillum elit Lorem ad minim exercitation. Dolore cupidatat cupidatat dolore nulla proident dolore ipsum quis labore.\r\n",
                      time: "18/09/2019 17:32:35",
                      author: "sending"
                    },
                    {
                      message: "Amet consectetur culpa do id ad do eiusmod duis aute. Lorem consectetur qui occaecat aliqua veniam ullamco ad irure. Ad laboris excepteur elit minim cupidatat. Esse pariatur laborum qui aliqua.\r\n",
                      time: "04/06/2020 20:28:49",
                      author: "friend"
                    },
                    {
                      message: "Sunt anim duis ipsum reprehenderit culpa id nisi consectetur exercitation officia ut magna tempor id. Do labore ad sit est labore. Velit velit magna exercitation veniam. Quis cupidatat laboris occaecat velit ex do dolore aliquip consequat laborum. Cupidatat ipsum ea enim nostrud mollit sit laborum deserunt.\r\n",
                      time: "16/05/2020 04:27:37",
                      author: "sending"
                    },
                    {
                      message: "Tempor id labore consectetur mollit dolore non nulla consectetur ea irure. Est anim ipsum velit voluptate ipsum. Eu est quis ex veniam non culpa nostrud nisi labore in. Id et aliqua esse cupidatat Lorem reprehenderit qui pariatur dolor ad qui quis laboris. Elit tempor elit ullamco anim ipsum enim voluptate culpa consectetur mollit tempor laborum.\r\n",
                      time: "29/02/2020 11:41:08",
                      author: "friend"
                    },
                    {
                      message: "Consectetur enim reprehenderit nostrud deserunt. Nisi sunt enim eu sunt ex amet deserunt reprehenderit eiusmod. In minim consequat officia cillum ipsum ea proident nulla sint tempor. Sint culpa eu ullamco occaecat nisi enim ullamco adipisicing officia.\r\n",
                      time: "03/09/2020 01:59:26",
                      author: "sending"
                    },
                    {
                      message: "Lorem dolore quis sint minim est exercitation ex sunt consectetur consectetur elit officia. Pariatur nulla qui fugiat adipisicing ut minim. Mollit excepteur aute esse cupidatat minim occaecat. Aliqua deserunt in tempor nulla anim officia et reprehenderit ut velit. Eu amet deserunt aliqua anim laborum consequat cillum. Nisi labore dolor excepteur labore eu do sit.\r\n",
                      time: "05/09/2019 04:09:23",
                      author: "sending"
                    },
                    {
                      message: "Excepteur consequat irure amet minim commodo consequat ut commodo incididunt magna velit et magna. Ex anim sint laboris occaecat in excepteur nostrud cillum. Mollit amet commodo ea quis commodo tempor commodo deserunt proident dolore. Labore officia sit aute mollit occaecat proident non fugiat ad quis adipisicing pariatur sit Lorem. Et est mollit adipisicing ad enim nisi deserunt est. Ut Lorem nulla do irure proident non. Pariatur id esse nisi minim.\r\n",
                      time: "12/08/2020 02:37:12",
                      author: "friend"
                    },
                    {
                      message: "Non est nisi adipisicing anim. Aute ullamco proident nulla laborum. Culpa pariatur commodo est incididunt nostrud eu ullamco velit et deserunt mollit aliquip. Occaecat voluptate est reprehenderit non eiusmod magna aliqua. Esse magna minim ipsum labore non anim veniam quis et cillum. Enim voluptate enim dolor culpa sunt quis labore consectetur non mollit.\r\n",
                      time: "07/06/2019 06:27:22",
                      author: "sending"
                    },
                    {
                      message: "Quis ea deserunt ea fugiat ex occaecat consectetur duis cillum. Voluptate culpa laborum officia sunt. Proident sit adipisicing adipisicing amet anim exercitation ipsum et in sint enim eiusmod. Reprehenderit ullamco Lorem aliquip sit elit Lorem do ex.\r\n",
                      time: "22/02/2019 11:36:08",
                      author: "friend"
                    },
                    {
                      message: "Consequat aliqua irure ea dolore excepteur in officia. Incididunt deserunt do nulla ut id exercitation sit eu commodo labore ipsum eu. Laborum id magna ex sint in eu laborum occaecat. Fugiat eiusmod occaecat elit dolore et sit ullamco. Deserunt commodo cillum nulla nisi.\r\n",
                      time: "05/06/2019 15:54:18",
                      author: "sending"
                    },
                    {
                      message: "Cupidatat cupidatat incididunt ea ipsum aliqua minim nisi Lorem. Duis nulla cillum esse consequat esse quis enim et. Ad ad ullamco in reprehenderit reprehenderit voluptate.\r\n",
                      time: "26/06/2020 09:58:38",
                      author: "friend"
                    },
                    {
                      message: "Sint fugiat id elit magna nulla veniam elit officia laborum reprehenderit aute aliquip. Pariatur nostrud culpa ullamco culpa nostrud dolor consequat deserunt occaecat ipsum mollit. Minim veniam nostrud quis ipsum. Tempor id ipsum laboris laborum amet dolor. Mollit enim anim exercitation quis veniam aliqua duis qui. Tempor deserunt pariatur ullamco non ea ad.\r\n",
                      time: "15/09/2020 01:54:02",
                      author: "friend"
                    },
                    {
                      message: "Eu do pariatur non sint cupidatat non laboris aliquip proident enim. Irure aliquip consectetur tempor occaecat fugiat aliquip mollit excepteur ea. Est sint qui ea duis eiusmod occaecat nostrud consequat voluptate.\r\n",
                      time: "29/05/2020 10:41:16",
                      author: "friend"
                    },
                    {
                      message: "Incididunt sunt qui ipsum laborum fugiat dolore mollit excepteur magna est veniam et elit. Labore non consequat fugiat fugiat. Deserunt sunt cupidatat mollit in. Dolore Lorem occaecat labore deserunt et laboris sit magna adipisicing nostrud quis. Amet excepteur do quis non eu pariatur cupidatat laborum. Amet magna officia esse elit aliqua non mollit.\r\n",
                      time: "31/07/2019 03:44:27",
                      author: "friend"
                    },
                    {
                      message: "Enim incididunt consectetur magna exercitation eu nostrud est. Consectetur non ea cillum laborum proident laborum velit enim anim deserunt qui consequat aliquip. Elit ea est fugiat sunt duis officia esse qui. Mollit qui labore fugiat sint est.\r\n",
                      time: "02/03/2020 06:41:46",
                      author: "sending"
                    },
                    {
                      message: "Aliquip fugiat occaecat qui cillum Lorem esse nostrud. Tempor aliquip pariatur labore aliquip eu officia occaecat laboris aliqua culpa non nostrud. Ut sunt velit est consectetur.\r\n",
                      time: "08/07/2019 23:20:08",
                      author: "friend"
                    },
                    {
                      message: "A PESQUISA DE CONTATOS FUNCIONA\r\n",
                      time: "29/02/2020 06:58:59",
                      author: "sending"
                    }
                  ]
                },
                {
                  id: 1,
                  name: "Payne Gallegos",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/31.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Eu commodo in irure adipisicing tempor reprehenderit labore amet aliqua consequat dolor nisi. Ipsum sint eiusmod id tempor amet nulla labore. Elit commodo qui aute tempor elit elit incididunt. Qui non aliqua adipisicing tempor. Ad dolor quis anim ex sit nisi excepteur.\r\n",
                      time: "30/08/2019 03:32:07",
                      author: "sending"
                    },
                    {
                      message: "Ex elit exercitation ad consequat. Id anim nulla quis ipsum aliqua officia veniam dolore. Sit aliquip occaecat duis exercitation ut dolor elit velit sunt aliqua. Occaecat do sit exercitation id. Occaecat non excepteur aliqua fugiat eiusmod reprehenderit id amet. Non ea in incididunt irure. Cupidatat adipisicing adipisicing mollit velit nostrud voluptate.\r\n",
                      time: "01/11/2019 04:19:47",
                      author: "friend"
                    },
                    {
                      message: "Nostrud aliquip voluptate in est adipisicing fugiat et reprehenderit commodo. Occaecat velit Lorem dolore est reprehenderit exercitation laborum mollit est. Labore commodo ex incididunt do fugiat tempor cupidatat. Magna sint in elit elit aliquip aliquip aliquip sunt aliquip magna ea velit laborum. Velit deserunt minim excepteur ut irure duis.\r\n",
                      time: "18/02/2020 00:41:25",
                      author: "sending"
                    },
                    {
                      message: "Incididunt velit ea anim eu et. In aliquip consequat pariatur fugiat non cillum nulla. Duis cillum qui tempor laborum exercitation dolor non. Reprehenderit amet elit dolor anim. Aliquip occaecat non deserunt irure sunt incididunt mollit mollit officia minim. Et est dolore fugiat minim. Id sunt anim duis fugiat dolor elit non cupidatat enim laboris duis aliqua culpa qui.\r\n",
                      time: "29/07/2020 04:27:54",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod anim eu id deserunt exercitation minim eiusmod velit id. Elit labore ad voluptate laborum aliqua amet et duis. Ut reprehenderit laboris velit esse esse eu. Aute mollit consectetur Lorem consectetur eu minim. Adipisicing amet adipisicing aliqua quis eiusmod quis ipsum. Occaecat laboris aute voluptate deserunt proident ipsum adipisicing ut consectetur reprehenderit sint magna.\r\n",
                      time: "06/03/2019 13:11:20",
                      author: "sending"
                    },
                    {
                      message: "Voluptate est pariatur sit quis tempor. Est cupidatat exercitation ex dolor elit Lorem. Adipisicing qui cillum do consequat dolore. Nisi enim enim in velit et in. Non id ullamco laboris est consequat esse sint nostrud elit aute culpa velit. Ipsum laborum consectetur eu consequat anim.\r\n",
                      time: "18/06/2019 03:33:34",
                      author: "sending"
                    },
                    {
                      message: "Nostrud ut esse ut nulla enim dolor. Laborum eiusmod nisi consequat ipsum eiusmod deserunt. Ea aliquip enim nostrud eiusmod est cupidatat labore. Laborum ut eiusmod ipsum commodo. Ipsum exercitation nulla ipsum enim.\r\n",
                      time: "26/03/2019 16:08:58",
                      author: "sending"
                    },
                    {
                      message: "Cupidatat magna Lorem proident minim eiusmod aliquip exercitation minim ex ipsum incididunt. Officia Lorem proident ullamco tempor id magna proident aute id voluptate mollit ea. Pariatur duis culpa aliqua proident fugiat adipisicing commodo non dolore do. Magna non adipisicing non aliquip. Pariatur aute sint ipsum minim nulla sint. Consequat sint occaecat ipsum occaecat ad nulla. Ut duis consequat irure labore sint nisi esse eu culpa eu pariatur in.\r\n",
                      time: "20/03/2019 00:25:38",
                      author: "sending"
                    },
                    {
                      message: "Ullamco minim commodo amet aliqua occaecat irure ex aliquip duis cillum mollit aute. Ad qui proident incididunt elit aliqua Lorem sint nisi proident. Laboris Lorem excepteur duis pariatur laborum id. Sint labore incididunt laborum magna amet sint laboris exercitation exercitation tempor anim laborum consectetur elit. Amet ullamco ipsum laboris ad exercitation exercitation nostrud non ullamco. Minim velit culpa labore sunt quis elit nostrud irure eiusmod consequat dolor. Nulla adipisicing ex occaecat amet ea.\r\n",
                      time: "24/06/2019 02:08:54",
                      author: "sending"
                    },
                    {
                      message: "Enim et commodo Lorem occaecat deserunt reprehenderit deserunt irure cillum ea exercitation minim cupidatat officia. Ipsum Lorem aute nulla amet officia sit Lorem ea do nulla ullamco minim. Laboris deserunt anim ea sunt sint consequat in proident aute voluptate. Incididunt do enim ex aliqua nostrud.\r\n",
                      time: "28/02/2019 18:39:07",
                      author: "friend"
                    },
                    {
                      message: "Ut ut qui nulla elit ullamco. Excepteur aute eiusmod nisi tempor. Lorem ex labore nostrud nostrud quis irure excepteur. Tempor culpa eiusmod et labore eiusmod duis pariatur est. Non dolore labore qui duis ipsum. Reprehenderit cupidatat irure magna exercitation est fugiat incididunt cillum ex anim. Duis eu ipsum ipsum nostrud esse.\r\n",
                      time: "16/06/2020 22:57:51",
                      author: "sending"
                    },
                    {
                      message: "Qui et sint do qui anim mollit commodo deserunt. Aliqua cupidatat magna deserunt consequat dolore est aliquip cillum ea aute magna ut dolore aute. Pariatur proident tempor quis ipsum reprehenderit veniam eu veniam cillum.\r\n",
                      time: "14/05/2020 01:54:42",
                      author: "sending"
                    },
                    {
                      message: "Cupidatat ex amet ullamco ad est id ad non dolore reprehenderit anim do. Aute consectetur excepteur incididunt occaecat et eu ad fugiat velit veniam reprehenderit. Non ipsum qui qui eiusmod cillum Lorem adipisicing aliqua. Occaecat amet non in nulla est eiusmod. Ea mollit sit laborum enim reprehenderit proident non. Nostrud aliqua excepteur reprehenderit pariatur reprehenderit aliqua non irure pariatur commodo qui id.\r\n",
                      time: "22/10/2019 03:00:41",
                      author: "friend"
                    },
                    {
                      message: "Anim nulla consequat sunt id ea sunt ea voluptate aliqua voluptate. Cupidatat aute nulla consectetur excepteur deserunt laboris ex. Laborum deserunt amet sunt nostrud incididunt veniam occaecat aliqua id. Cupidatat est velit Lorem aute labore. Quis ex labore laboris non minim. Do mollit cillum consequat elit incididunt nulla.\r\n",
                      time: "18/04/2019 04:44:13",
                      author: "sending"
                    },
                    {
                      message: "Qui aliquip sint ex magna veniam labore officia esse magna. Pariatur sunt nulla reprehenderit enim reprehenderit ea eiusmod esse. Ad est deserunt qui esse voluptate nulla id aute culpa cupidatat. Exercitation amet ut sit Lorem ullamco nulla sint sit.\r\n",
                      time: "30/07/2020 08:08:02",
                      author: "sending"
                    }
                  ]
                },
                {
                  id: 2,
                  name: "Sherman Valentine",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/29.png",
                  status: "Escrevendo...",
                  mensagens: [
                    {
                      message: "Irure consectetur eiusmod culpa labore ad veniam nulla sint id eiusmod. Aliquip sunt elit pariatur labore. Duis id eu velit in aute dolor. Ipsum eu elit magna aliquip laboris incididunt dolore irure Lorem aliqua id officia. Exercitation quis veniam ex sint enim velit mollit quis anim aliquip non commodo deserunt ad. Esse dolore occaecat velit velit Lorem qui fugiat in. Fugiat consectetur eiusmod quis esse adipisicing enim sit laborum.\r\n",
                      time: "17/09/2020 11:18:01",
                      author: "friend"
                    },
                    {
                      message: "Aute commodo nisi sint exercitation culpa minim laborum. Culpa ex nisi amet consequat sint ea voluptate veniam ullamco cillum nostrud. Culpa nostrud et proident nulla ipsum qui quis velit duis quis ipsum. Incididunt ad duis sint amet. Est laboris ex id velit cillum. Excepteur exercitation minim nulla do. Fugiat cupidatat in tempor pariatur est aliquip ex et aliqua nostrud.\r\n",
                      time: "20/01/2020 04:26:16",
                      author: "friend"
                    },
                    {
                      message: "Nisi ex sit officia consectetur magna do commodo. Ea occaecat ullamco dolor cupidatat adipisicing commodo sunt mollit in adipisicing velit. Ullamco fugiat laborum labore laborum do sunt culpa id proident ea ea fugiat. Ut elit laborum id velit. Tempor veniam qui in fugiat qui Lorem irure quis. Consectetur officia consequat dolore officia dolor tempor nostrud in irure.\r\n",
                      time: "31/05/2019 16:54:15",
                      author: "sending"
                    },
                    {
                      message: "Ipsum duis amet laborum et dolor esse cupidatat veniam. Do irure laborum ex veniam excepteur sint aliqua cillum deserunt qui voluptate commodo. Aliqua velit aliqua ut laborum nostrud. Laborum do sunt sint minim qui sit Lorem velit non. Duis dolore qui duis pariatur amet cupidatat ex tempor ipsum ex et consectetur qui occaecat. Excepteur nulla officia commodo enim officia.\r\n",
                      time: "06/10/2019 17:02:18",
                      author: "friend"
                    },
                    {
                      message: "Duis proident sint cupidatat pariatur pariatur Lorem culpa aliqua est qui cillum est laboris sunt. Ipsum id ut ea qui et labore dolore commodo. Incididunt irure ipsum elit enim. Nostrud sunt enim velit in sit laboris enim id sunt anim nostrud aute adipisicing magna.\r\n",
                      time: "02/12/2019 16:59:06",
                      author: "sending"
                    },
                    {
                      message: "Culpa anim excepteur exercitation exercitation ut ad dolore anim fugiat culpa minim duis irure. Voluptate consequat nisi quis cillum magna magna in deserunt exercitation. Quis consectetur excepteur magna ullamco sunt aliqua aute est aliquip amet consequat commodo irure. Labore veniam tempor consequat excepteur do officia. Tempor sunt ea esse eu minim culpa eiusmod dolor sit.\r\n",
                      time: "19/06/2020 19:40:20",
                      author: "friend"
                    },
                    {
                      message: "Laboris sit incididunt tempor pariatur duis nulla. Duis consequat duis laborum voluptate. Incididunt anim nisi consequat dolore ad ut magna laborum amet dolore id magna. Tempor nulla elit ea aliqua velit sit consectetur sint consequat ad irure do nisi aliquip. Occaecat minim proident occaecat anim id aliqua anim aute do. Quis aliqua duis occaecat labore irure veniam veniam aliquip ex aliqua nostrud laborum adipisicing consequat. Nostrud ipsum sint qui nulla amet.\r\n",
                      time: "13/05/2020 05:30:49",
                      author: "friend"
                    },
                    {
                      message: "Mollit cillum excepteur veniam consequat nulla ad reprehenderit incididunt aliqua in laboris proident. Enim in adipisicing commodo qui nisi qui mollit laborum do. Veniam dolor aute ullamco nisi magna deserunt. Eiusmod commodo proident cillum in esse. Labore labore amet tempor duis pariatur culpa exercitation Lorem ullamco aliqua et pariatur duis cillum.\r\n",
                      time: "15/10/2019 12:25:49",
                      author: "sending"
                    },
                    {
                      message: "Amet eu nisi proident tempor ullamco velit. Velit sit nisi dolor reprehenderit culpa voluptate in deserunt. Consequat esse labore laboris ad sit velit et velit non. Dolor sint ea eiusmod ullamco eu ut adipisicing reprehenderit quis occaecat qui. Ea sit amet aute Lorem ex cupidatat cupidatat excepteur mollit dolore. Labore amet exercitation eiusmod dolor occaecat sint est dolor reprehenderit deserunt deserunt tempor qui do.\r\n",
                      time: "08/04/2019 05:59:10",
                      author: "sending"
                    },
                    {
                      message: "Nisi ad fugiat ipsum est commodo eiusmod dolore elit qui ex dolore duis ipsum. Exercitation eiusmod dolore non nulla ea reprehenderit labore dolore nulla sint nisi proident. Non dolore dolore incididunt ex. Tempor nulla velit aliqua consectetur ex. Sint tempor voluptate ea minim quis nisi velit proident duis esse.\r\n",
                      time: "01/09/2020 04:12:17",
                      author: "friend"
                    },
                    {
                      message: "Voluptate in cillum minim sunt esse sint. Excepteur eiusmod sint laboris elit. Mollit veniam ut minim non occaecat.\r\n",
                      time: "26/03/2020 00:42:28",
                      author: "sending"
                    },
                    {
                      message: "Quis culpa dolore voluptate reprehenderit reprehenderit mollit velit fugiat elit. Proident aliquip consectetur quis nisi culpa dolor do qui ullamco sit commodo. Magna deserunt sint Lorem sunt dolore veniam dolor tempor sunt cupidatat non irure labore. Dolor velit eiusmod quis culpa pariatur eiusmod consequat nisi laboris ea minim enim elit ut. Pariatur ipsum veniam reprehenderit exercitation laborum voluptate do. Dolor minim eu minim proident quis. Sint cillum nostrud enim cillum sunt consequat voluptate consequat deserunt dolor minim veniam esse.\r\n",
                      time: "24/02/2019 02:58:19",
                      author: "sending"
                    },
                    {
                      message: "Ullamco commodo mollit est et. Et occaecat dolore culpa exercitation adipisicing velit enim nisi enim. Tempor reprehenderit aute sit sit laboris. Irure mollit Lorem quis fugiat do nostrud aliquip aliquip dolor. Occaecat laboris pariatur esse ut aliquip. Adipisicing laboris irure sunt exercitation.\r\n",
                      time: "07/01/2020 21:59:58",
                      author: "sending"
                    },
                    {
                      message: "Aliquip duis enim occaecat exercitation esse mollit elit cupidatat consequat laborum. Duis sit aute mollit proident incididunt eiusmod quis ad ea ad. In elit laboris magna voluptate ut. Amet et eu laborum laborum irure consequat consequat anim cillum eiusmod proident. Non et dolor dolor sunt ullamco excepteur do laboris et fugiat.\r\n",
                      time: "25/12/2019 00:13:19",
                      author: "friend"
                    },
                    {
                      message: "Deserunt sit aliqua ad consequat anim duis. Elit nulla do amet cupidatat elit commodo et enim ut duis. Enim non cillum sint tempor occaecat labore.\r\n",
                      time: "09/01/2020 18:44:01",
                      author: "friend"
                    },
                    {
                      message: "Lorem cupidatat adipisicing occaecat eiusmod ut adipisicing irure do qui est laborum ad culpa. Consequat occaecat mollit occaecat officia exercitation occaecat sunt. Consequat adipisicing nisi ea exercitation officia esse.\r\n",
                      time: "06/04/2019 12:15:16",
                      author: "sending"
                    },
                    {
                      message: "Anim laborum ea labore ullamco minim pariatur. Reprehenderit ad commodo voluptate nostrud quis exercitation ut in veniam proident. Elit adipisicing nisi aliquip minim enim duis aliquip qui. Proident ullamco id irure nulla. Enim laborum duis in voluptate Lorem id occaecat dolor duis. Ad irure ut id laborum commodo Lorem.\r\n",
                      time: "01/05/2019 00:49:26",
                      author: "friend"
                    },
                    {
                      message: "Magna dolor velit officia in enim dolore quis. Anim et qui duis fugiat Lorem. Consectetur laboris reprehenderit exercitation adipisicing. Commodo Lorem velit nisi cupidatat laborum laboris incididunt non. Aliqua enim proident et anim. Deserunt dolor mollit laborum in dolor enim est adipisicing ipsum cupidatat tempor dolor.\r\n",
                      time: "15/01/2020 14:50:39",
                      author: "sending"
                    },
                    {
                      message: "Veniam tempor magna ea velit magna eu in excepteur consectetur. Et velit aliqua eu duis pariatur non amet voluptate reprehenderit consectetur et. Sint elit ex culpa sit excepteur consectetur ex labore eiusmod consequat tempor. Deserunt est occaecat cupidatat elit sunt voluptate laborum.\r\n",
                      time: "30/09/2019 12:42:30",
                      author: "friend"
                    },
                    {
                      message: "Et adipisicing sint labore elit nisi veniam nostrud dolore laborum ipsum cillum aliqua anim. Consectetur Lorem aute magna eiusmod. Adipisicing dolore ex duis magna est et non tempor. Id incididunt labore dolore non culpa. Officia ad ad est nisi laboris adipisicing. Veniam ut anim ullamco sit eu ipsum ad cillum eu esse qui culpa aliquip sint. Do proident minim reprehenderit labore commodo consequat deserunt aliquip in consectetur.\r\n",
                      time: "05/04/2019 14:51:59",
                      author: "friend"
                    },
                    {
                      message: "Elit adipisicing excepteur amet ex labore excepteur adipisicing quis sint excepteur reprehenderit. Velit ex pariatur tempor enim eiusmod dolore elit officia esse nulla cupidatat esse reprehenderit. Ad ullamco aliqua anim aute id velit sit pariatur cillum dolor est pariatur. Labore excepteur minim irure ipsum sunt deserunt ex incididunt id id duis enim est magna. Nisi do ex qui occaecat veniam proident id. Ad veniam id ut Lorem dolore culpa id.\r\n",
                      time: "26/02/2020 10:44:32",
                      author: "sending"
                    },
                    {
                      message: "Et ut proident fugiat ea non cupidatat in ad exercitation sit excepteur elit aliqua. Non sunt duis excepteur nisi anim veniam consequat. Voluptate consequat incididunt dolore mollit consequat consectetur mollit pariatur aliquip dolore consequat tempor tempor.\r\n",
                      time: "16/09/2020 04:37:35",
                      author: "friend"
                    },
                    {
                      message: "Est ullamco ea aliquip id laborum deserunt exercitation quis eu eu deserunt cupidatat proident. Labore voluptate reprehenderit Lorem exercitation enim ea ex tempor labore sint cillum. Aute esse irure deserunt ea quis incididunt id eu aliqua Lorem aliqua ut voluptate culpa. Eu ex ad mollit nostrud mollit. Quis consequat aliquip id adipisicing duis dolor esse reprehenderit. Ad occaecat mollit consectetur aute reprehenderit fugiat dolore ipsum occaecat.\r\n",
                      time: "24/04/2020 10:49:44",
                      author: "sending"
                    },
                    {
                      message: "Labore anim non enim Lorem nisi id incididunt. Reprehenderit mollit voluptate ut deserunt id irure commodo nulla minim sint excepteur consectetur id. Sint fugiat labore nisi exercitation amet labore proident id esse ipsum excepteur occaecat et in. Excepteur pariatur quis consectetur cupidatat sunt. Sunt nostrud incididunt laborum adipisicing tempor ea nulla consectetur ad. Proident non nostrud ut mollit do Lorem magna dolor cillum. Irure adipisicing mollit dolor sit ipsum et reprehenderit sunt proident.\r\n",
                      time: "05/02/2020 13:56:37",
                      author: "sending"
                    },
                    {
                      message: "In tempor esse occaecat sit quis nisi do laborum anim ipsum laboris nisi duis est. Commodo laborum incididunt sit sint. Proident fugiat excepteur cillum anim sunt labore incididunt pariatur ea excepteur magna Lorem aute non.\r\n",
                      time: "04/09/2019 09:30:39",
                      author: "sending"
                    },
                    {
                      message: "Occaecat ad ut consectetur cillum. In nisi duis qui excepteur. Eiusmod aliqua mollit consectetur sunt anim veniam dolor. Proident excepteur nostrud ex sit amet in aliqua sit quis dolor officia elit. Commodo in fugiat incididunt do. Ullamco tempor esse occaecat aliquip labore veniam ex dolor dolore amet tempor exercitation Lorem deserunt.\r\n",
                      time: "16/02/2019 16:33:52",
                      author: "friend"
                    },
                    {
                      message: "Magna minim esse qui veniam qui sunt mollit occaecat nostrud. Occaecat eiusmod laborum consectetur aute cillum aliqua consequat laboris. Id et consectetur officia ex velit eu quis cupidatat veniam aute consequat ea. Labore eiusmod occaecat elit qui in nulla.\r\n",
                      time: "07/07/2020 13:47:04",
                      author: "sending"
                    },
                    {
                      message: "Ea mollit excepteur proident magna aliquip adipisicing culpa ut sunt nulla ex minim. Adipisicing qui magna occaecat ex amet. Labore adipisicing labore amet veniam dolore anim ullamco anim. Nisi ut esse amet magna reprehenderit est qui sint aliquip nulla non nulla consequat. Est amet elit tempor proident sit voluptate fugiat dolor proident minim laboris.\r\n",
                      time: "13/07/2020 00:16:02",
                      author: "sending"
                    },
                    {
                      message: "Cupidatat cupidatat nostrud aliqua minim commodo excepteur voluptate laboris reprehenderit Lorem occaecat veniam eiusmod. Duis amet cupidatat in excepteur mollit cupidatat consequat laboris in id. Mollit veniam magna ea Lorem laboris cillum. Non quis ipsum dolor cupidatat magna ullamco Lorem duis cillum adipisicing.\r\n",
                      time: "02/11/2019 17:10:40",
                      author: "sending"
                    },
                    {
                      message: "Laboris laboris cupidatat tempor magna et cillum Lorem. Lorem esse eu duis fugiat nostrud officia eu in Lorem eiusmod do eiusmod. Laborum eu cillum cillum irure irure. Qui aute sint tempor sit tempor est. Sint excepteur anim deserunt exercitation dolore. Labore ex reprehenderit voluptate qui veniam ut veniam cillum do incididunt est veniam voluptate.\r\n",
                      time: "19/07/2019 04:56:48",
                      author: "sending"
                    },
                    {
                      message: "Amet cupidatat fugiat amet ad minim labore irure qui. Duis ullamco reprehenderit incididunt aliqua laboris cillum irure nulla ad Lorem amet irure ut. Magna qui velit amet cillum culpa proident anim et cupidatat sint ipsum. Magna tempor pariatur pariatur proident culpa amet. Id Lorem sint voluptate in proident velit labore do qui ex consectetur. Mollit labore exercitation ea labore cupidatat consectetur adipisicing proident veniam eu. Ea incididunt ut irure exercitation Lorem consectetur mollit adipisicing veniam sint nostrud consectetur sunt.\r\n",
                      time: "18/02/2020 12:53:48",
                      author: "friend"
                    },
                    {
                      message: "Nostrud ut reprehenderit sit veniam exercitation incididunt anim. Et eu velit exercitation amet excepteur adipisicing ad adipisicing ullamco deserunt id ullamco amet eiusmod. Sit mollit cillum dolore irure cillum voluptate est magna aliquip esse. Incididunt officia fugiat commodo ea proident laboris magna. Anim ut ex consequat amet labore eiusmod nisi pariatur deserunt aute ex.\r\n",
                      time: "11/03/2019 07:07:36",
                      author: "friend"
                    },
                    {
                      message: "Lorem reprehenderit laborum in reprehenderit est proident. Ipsum qui do irure mollit occaecat dolore ad deserunt magna veniam elit dolore velit. Tempor sunt dolor exercitation exercitation tempor nisi ullamco deserunt ut incididunt aliquip fugiat laborum. Veniam voluptate pariatur incididunt id aliquip ad quis proident aliqua non. Est cupidatat et sit Lorem nulla magna dolore in.\r\n",
                      time: "06/06/2020 13:37:04",
                      author: "friend"
                    },
                    {
                      message: "Veniam nisi nostrud ex qui enim incididunt cillum mollit mollit duis ex sunt dolor dolore. Ullamco in ipsum amet eu esse magna Lorem eiusmod elit elit excepteur ad officia ex. Adipisicing ad id magna est. Ad do est excepteur adipisicing fugiat veniam in. Amet anim velit tempor mollit do irure commodo sunt irure cillum excepteur incididunt. Pariatur Lorem fugiat irure do sint magna et labore ad ad.\r\n",
                      time: "30/11/2019 19:24:11",
                      author: "friend"
                    },
                    {
                      message: "Minim nisi nostrud ea est magna exercitation minim Lorem eu incididunt excepteur ullamco minim non. Ad eiusmod culpa voluptate labore tempor ut ullamco aute ipsum qui exercitation incididunt culpa. Ipsum do aliqua ut esse deserunt deserunt voluptate fugiat. Ex cillum est ipsum velit magna officia. Elit ad proident tempor pariatur ullamco do nulla Lorem non et.\r\n",
                      time: "16/05/2020 15:48:33",
                      author: "friend"
                    },
                    {
                      message: "Voluptate labore ut excepteur veniam culpa ea officia nisi sint sit. Culpa aliquip elit id id exercitation fugiat elit sint elit dolore culpa. Adipisicing dolore veniam ut dolor excepteur et veniam nisi veniam irure reprehenderit nostrud et ipsum. Enim et anim excepteur reprehenderit qui cupidatat proident quis officia. Sunt sint laboris dolore aliquip non pariatur do nostrud culpa laborum tempor.\r\n",
                      time: "26/03/2019 03:08:35",
                      author: "sending"
                    },
                    {
                      message: "Nostrud ipsum elit laboris excepteur amet. Excepteur magna magna sunt commodo pariatur ad. Qui cillum irure labore nulla ea mollit commodo ipsum sunt. Elit non anim excepteur quis. Laboris sint esse adipisicing sint amet anim cillum et nostrud consectetur labore ea ea.\r\n",
                      time: "15/06/2019 02:51:33",
                      author: "friend"
                    },
                    {
                      message: "Fugiat incididunt reprehenderit laboris enim eu mollit mollit aliqua anim nostrud aliqua sunt exercitation ullamco. Ut elit adipisicing velit do. Incididunt quis proident nostrud eu incididunt minim dolor proident dolor non nulla laborum non. Quis consectetur dolore ut eu veniam duis consequat magna elit fugiat mollit excepteur.\r\n",
                      time: "30/09/2020 06:33:44",
                      author: "sending"
                    },
                    {
                      message: "Ipsum minim consequat sint Lorem duis pariatur enim fugiat sit magna ea sunt aliquip reprehenderit. Nulla veniam aliqua magna est ex nulla eiusmod nulla nisi labore. Deserunt proident sunt ullamco cupidatat minim qui non ea officia mollit cupidatat laborum.\r\n",
                      time: "15/07/2020 22:39:11",
                      author: "sending"
                    },
                    {
                      message: "Voluptate commodo deserunt aliquip pariatur exercitation cupidatat est dolore eu aute ullamco et excepteur proident. Exercitation nisi laboris labore eiusmod veniam adipisicing exercitation eiusmod duis culpa laboris aute. Pariatur labore culpa cupidatat pariatur excepteur. Dolore amet proident laboris non adipisicing reprehenderit.\r\n",
                      time: "23/03/2019 06:44:17",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 3,
                  name: "Jan Kinney",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/11.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Magna amet reprehenderit exercitation minim officia culpa non. Consequat incididunt deserunt consectetur ipsum labore nisi nisi culpa aliquip reprehenderit minim non ex exercitation. Amet ut consectetur velit elit pariatur. Dolor nisi esse sunt ad. Commodo duis aliqua nostrud cupidatat occaecat excepteur minim adipisicing laboris. Est duis deserunt eiusmod culpa enim excepteur mollit sit fugiat dolore cillum. In commodo esse consectetur minim proident adipisicing ad nisi minim.\r\n",
                      time: "10/08/2019 22:56:51",
                      author: "friend"
                    },
                    {
                      message: "Occaecat elit nostrud ea esse id deserunt amet cupidatat deserunt velit cillum enim quis pariatur. Eiusmod dolore ullamco tempor ex eu mollit. Exercitation do et ex consequat veniam in reprehenderit ut. Nisi tempor amet elit officia est irure esse magna sit. Amet enim et fugiat deserunt aliquip quis adipisicing est.\r\n",
                      time: "20/09/2020 23:53:30",
                      author: "friend"
                    },
                    {
                      message: "Laboris labore nostrud in occaecat aute sit. Laborum aute tempor officia culpa id sit sint laborum velit. Dolore ex proident cupidatat id nulla elit do aliquip irure minim aute officia consectetur et. Velit ut veniam ullamco nostrud fugiat ea occaecat ex Lorem.\r\n",
                      time: "24/06/2019 18:02:30",
                      author: "sending"
                    },
                    {
                      message: "Sit labore voluptate aute officia labore sint elit ut. Excepteur labore deserunt minim sint in anim in deserunt. Commodo magna in aliquip voluptate qui aliqua fugiat in consequat eu ullamco dolore fugiat est.\r\n",
                      time: "15/06/2019 11:23:55",
                      author: "friend"
                    },
                    {
                      message: "Officia consequat enim quis exercitation nostrud. Sint consectetur duis irure adipisicing excepteur. Mollit nulla irure aute officia ex aliquip excepteur sunt elit ut eu eu id. In est voluptate amet laborum duis excepteur tempor aliqua laboris fugiat excepteur occaecat occaecat. Tempor anim duis excepteur dolore nulla amet nisi esse et nulla in adipisicing minim laboris. Commodo laboris eu aute labore anim magna.\r\n",
                      time: "20/09/2019 03:10:31",
                      author: "sending"
                    },
                    {
                      message: "Cillum sit commodo quis anim eu non labore. Ut consectetur Lorem nisi cillum velit. Sint Lorem occaecat voluptate commodo. Pariatur enim deserunt adipisicing incididunt et do dolore cillum anim cupidatat. Aliqua reprehenderit ex aliqua duis.\r\n",
                      time: "30/01/2020 04:07:05",
                      author: "sending"
                    },
                    {
                      message: "Aute mollit officia esse labore aliquip deserunt anim occaecat eu occaecat labore elit. Laborum id aliqua in ullamco sit excepteur laborum nostrud magna laboris reprehenderit adipisicing commodo ea. Id nisi anim magna do ad magna laboris id in enim deserunt aliqua adipisicing.\r\n",
                      time: "20/02/2019 14:18:56",
                      author: "sending"
                    },
                    {
                      message: "Nisi cupidatat eu deserunt deserunt tempor veniam anim dolor laborum deserunt nulla non ut dolore. Eiusmod proident deserunt aliquip laborum fugiat anim labore labore anim laborum. Ullamco voluptate dolor voluptate incididunt aliqua culpa proident sit. Mollit ipsum excepteur non nostrud nulla qui. Laborum elit voluptate sint nostrud aute nisi amet irure adipisicing culpa voluptate duis.\r\n",
                      time: "22/04/2020 06:59:25",
                      author: "sending"
                    },
                    {
                      message: "Est excepteur ea id minim ex esse aliquip deserunt sint esse adipisicing est aliqua. Non proident commodo cupidatat Lorem cupidatat. Laboris aliquip esse consectetur consequat anim cupidatat cillum incididunt fugiat minim velit pariatur minim. Voluptate dolor pariatur ipsum nisi ex mollit quis consequat eiusmod tempor do dolore sunt consequat. Consequat proident quis eu dolor Lorem pariatur. Exercitation irure reprehenderit nostrud voluptate do ut Lorem deserunt. Pariatur voluptate veniam laborum aute fugiat pariatur labore mollit ea adipisicing cupidatat esse veniam.\r\n",
                      time: "12/05/2020 06:03:45",
                      author: "sending"
                    },
                    {
                      message: "Occaecat ullamco ex dolor eiusmod mollit dolore ullamco officia officia voluptate veniam ex. Minim officia in reprehenderit aliquip elit sunt. Ea velit et dolore officia occaecat amet fugiat commodo ullamco proident do excepteur.\r\n",
                      time: "16/07/2020 05:16:35",
                      author: "sending"
                    },
                    {
                      message: "Nostrud occaecat nisi incididunt pariatur eiusmod amet ullamco Lorem duis Lorem et mollit consectetur esse. Magna ipsum est nulla nisi qui pariatur reprehenderit. Commodo consequat proident sit qui mollit duis. Pariatur pariatur fugiat magna sunt. Culpa magna occaecat deserunt aliqua esse magna Lorem voluptate. Anim in velit ex voluptate exercitation ex culpa incididunt cupidatat sunt. Occaecat ullamco excepteur sint irure laborum magna aute ipsum laboris est anim minim ullamco anim.\r\n",
                      time: "13/11/2019 01:15:50",
                      author: "sending"
                    },
                    {
                      message: "Incididunt magna nisi fugiat ex dolor nisi proident Lorem id nisi nostrud sint consequat elit. Sit nostrud incididunt elit veniam velit magna. Tempor aute consectetur nostrud amet eiusmod eu nulla qui enim fugiat. Excepteur non enim veniam nostrud consectetur amet veniam. Eu dolore Lorem labore velit excepteur anim irure aliquip nostrud ipsum labore aliqua culpa voluptate. Veniam minim minim elit nulla incididunt dolor duis laborum Lorem occaecat adipisicing labore id.\r\n",
                      time: "05/12/2019 02:20:38",
                      author: "friend"
                    },
                    {
                      message: "Exercitation ex elit excepteur minim aliquip id eu. Excepteur minim mollit elit sit minim ad ex consequat Lorem adipisicing excepteur. Adipisicing anim elit est minim commodo duis non aliqua eu. Irure duis pariatur commodo laboris eu.\r\n",
                      time: "29/09/2020 23:12:20",
                      author: "friend"
                    },
                    {
                      message: "Aute sunt esse eu laborum commodo id non. Nisi pariatur dolor esse non deserunt excepteur exercitation cillum aliqua in velit voluptate irure. Eiusmod nulla anim magna adipisicing in ex. Excepteur laboris Lorem Lorem dolor exercitation Lorem minim dolor ex aute. Elit laborum laborum reprehenderit aliquip culpa excepteur enim cillum nisi laboris minim et est.\r\n",
                      time: "27/04/2020 09:58:11",
                      author: "friend"
                    },
                    {
                      message: "Irure amet voluptate nostrud cillum nulla. Labore adipisicing aliqua cillum voluptate. Dolor nostrud nulla et do minim tempor dolor ut laboris est minim id. Aliqua elit in elit veniam. Commodo officia tempor fugiat sint. Adipisicing dolor ullamco laborum proident.\r\n",
                      time: "01/07/2019 15:17:28",
                      author: "sending"
                    },
                    {
                      message: "Enim proident aliquip fugiat ullamco Lorem sunt Lorem ullamco excepteur laborum. Nisi nostrud incididunt adipisicing in commodo consectetur et laborum. Non id sint pariatur eiusmod occaecat nulla cupidatat laborum. Deserunt fugiat reprehenderit reprehenderit duis duis laboris ut et velit enim esse ut excepteur.\r\n",
                      time: "28/11/2019 22:46:14",
                      author: "sending"
                    },
                    {
                      message: "Occaecat Lorem aliquip qui esse exercitation quis amet in. Dolore commodo tempor voluptate exercitation ad duis enim Lorem. Occaecat id eiusmod commodo ea ut. Exercitation anim tempor dolore voluptate proident cillum esse adipisicing sit quis elit dolore eu. Dolor Lorem aliqua eiusmod incididunt officia consectetur qui adipisicing est duis excepteur sint. Labore laboris enim occaecat aliquip veniam eiusmod pariatur consectetur incididunt eu.\r\n",
                      time: "18/09/2020 03:46:23",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit elit aliqua sit labore veniam veniam veniam mollit magna proident minim in labore. Cupidatat incididunt velit eu ex excepteur. Excepteur incididunt id laborum incididunt in cupidatat incididunt sunt exercitation in. Nulla nostrud ea voluptate nisi tempor fugiat magna consequat.\r\n",
                      time: "06/04/2019 00:04:15",
                      author: "friend"
                    },
                    {
                      message: "Eu ut aliqua et sunt quis eu sit labore. Lorem eiusmod enim ullamco dolore eiusmod veniam ullamco in reprehenderit culpa pariatur amet qui. Id consectetur est ex laborum proident quis ad.\r\n",
                      time: "24/07/2020 01:05:52",
                      author: "friend"
                    },
                    {
                      message: "Sunt ut Lorem ad et cillum do in laborum velit cupidatat est eu. Et magna fugiat eu sint occaecat cillum Lorem ad deserunt esse occaecat duis. Minim laboris sunt fugiat fugiat enim ut.\r\n",
                      time: "25/12/2019 12:49:01",
                      author: "sending"
                    },
                    {
                      message: "Nulla id mollit minim aliqua. Aute cupidatat sint sit adipisicing ullamco ut tempor do fugiat culpa ullamco nostrud id deserunt. Commodo deserunt magna quis aliqua proident minim irure consectetur exercitation esse aliqua eu enim proident. Occaecat dolore laboris voluptate voluptate laborum ipsum nulla non est amet irure sunt labore commodo. Tempor commodo exercitation sit consequat ea culpa ullamco ea duis ullamco dolore qui. Exercitation tempor ad excepteur aute do ea magna reprehenderit minim laboris exercitation occaecat reprehenderit dolor. Ea pariatur mollit commodo duis dolor veniam ipsum ut enim anim incididunt qui.\r\n",
                      time: "25/07/2019 04:11:26",
                      author: "friend"
                    },
                    {
                      message: "Nostrud elit ex non velit id occaecat proident. Quis occaecat incididunt eiusmod mollit deserunt sint. Qui sunt cillum pariatur pariatur sit non labore id fugiat nostrud dolor nostrud dolore aute. Proident deserunt ipsum aute excepteur cupidatat id anim occaecat esse pariatur enim veniam anim eiusmod. Qui ut cupidatat reprehenderit nisi laborum. Sint est eiusmod aliqua commodo nostrud reprehenderit exercitation.\r\n",
                      time: "10/08/2020 17:15:11",
                      author: "friend"
                    },
                    {
                      message: "Cupidatat magna fugiat adipisicing deserunt nostrud ea nulla esse consequat sit eu mollit et quis. Cillum nisi ea non elit exercitation elit ex consectetur nostrud mollit ea aute ipsum. Aute aliqua nulla irure consectetur consequat consequat eu minim veniam esse. Aute enim aliquip fugiat in anim et. Deserunt officia sit ex culpa. Laborum adipisicing Lorem esse duis anim deserunt ullamco.\r\n",
                      time: "28/06/2020 13:26:00",
                      author: "friend"
                    },
                    {
                      message: "Et deserunt officia est eu cillum. Ea duis est dolor esse ad excepteur aute eu id. Aliqua cillum nulla non cillum enim excepteur eiusmod Lorem. Consequat voluptate eu sunt dolor officia ex proident. Nisi sunt eiusmod qui proident aliqua tempor cillum deserunt ullamco. Eiusmod cillum consequat culpa excepteur ipsum.\r\n",
                      time: "13/06/2019 23:32:30",
                      author: "friend"
                    },
                    {
                      message: "Lorem esse occaecat ullamco laboris ad consectetur veniam ad. Lorem labore ipsum eu officia eiusmod eiusmod minim laborum. Nostrud in laborum dolor amet Lorem cillum elit eiusmod sint. Veniam voluptate ex deserunt dolor eu aliquip occaecat veniam irure excepteur nostrud. Sunt sit cupidatat ipsum est proident deserunt occaecat tempor deserunt adipisicing. Mollit qui aliquip quis minim labore commodo cillum sunt aute consequat duis ut.\r\n",
                      time: "07/05/2019 16:08:25",
                      author: "sending"
                    },
                    {
                      message: "Et eiusmod sint culpa ex ea veniam deserunt. Ex ullamco do ea ullamco voluptate laboris esse sit cupidatat eiusmod non voluptate ad culpa. Consequat ex do ad nostrud. Aliqua sit mollit culpa ad. Magna ipsum nisi reprehenderit quis deserunt cupidatat ipsum est aliqua magna aute. Esse sint nulla occaecat voluptate duis cillum excepteur ut culpa.\r\n",
                      time: "22/03/2019 04:22:08",
                      author: "sending"
                    },
                    {
                      message: "Mollit quis do consectetur do in sit dolor aliqua culpa deserunt. Adipisicing cillum ea commodo eiusmod amet eu. Irure ipsum excepteur adipisicing ut sit laboris ad est tempor sit veniam. Dolore adipisicing veniam laborum cillum elit amet aliquip pariatur elit et adipisicing consequat. Ex incididunt elit reprehenderit dolore mollit reprehenderit dolor.\r\n",
                      time: "19/02/2019 11:42:57",
                      author: "sending"
                    },
                    {
                      message: "Ex do nisi minim aute excepteur cupidatat Lorem consectetur veniam nisi pariatur sunt irure. Ea commodo voluptate veniam aute amet sunt nostrud enim amet cupidatat sunt. Dolore occaecat nostrud reprehenderit nostrud laborum cillum sunt voluptate culpa reprehenderit mollit deserunt Lorem.\r\n",
                      time: "28/11/2019 05:10:29",
                      author: "friend"
                    },
                    {
                      message: "Labore anim mollit exercitation cillum esse velit aute id ea proident pariatur Lorem dolor aute. Veniam consectetur ad nulla excepteur labore adipisicing laboris laboris irure. Aliquip consectetur fugiat consectetur enim pariatur.\r\n",
                      time: "18/02/2020 13:42:54",
                      author: "friend"
                    },
                    {
                      message: "Cupidatat ea excepteur fugiat deserunt dolore eiusmod proident amet ea dolore. Commodo cupidatat occaecat laboris nostrud qui cillum. Cillum fugiat ad pariatur excepteur pariatur adipisicing excepteur sit. Exercitation sit esse culpa dolor anim deserunt in aliqua sunt esse voluptate.\r\n",
                      time: "20/09/2019 16:45:06",
                      author: "friend"
                    },
                    {
                      message: "Labore non est cupidatat tempor anim pariatur laborum anim culpa. Amet occaecat aliqua consectetur laborum incididunt. Irure consectetur officia ea qui dolor irure nostrud ut enim ut quis duis. Amet cupidatat aliqua commodo id sit adipisicing veniam eiusmod. Fugiat irure aliquip culpa officia. In pariatur est ut laborum sint velit ex. Et dolore dolore culpa cupidatat ea ad cillum minim ullamco eu veniam cillum.\r\n",
                      time: "01/07/2019 11:15:18",
                      author: "sending"
                    },
                    {
                      message: "Aute officia excepteur do deserunt non cupidatat commodo ea qui nisi. Consequat et eu amet eu. Fugiat proident proident eu in laboris eiusmod irure occaecat. Incididunt minim veniam non ut labore. Consequat eu incididunt dolore ipsum dolore. In reprehenderit consectetur do laboris laboris consectetur consectetur quis fugiat velit labore. Amet eu amet nisi nisi tempor nostrud sint magna.\r\n",
                      time: "26/03/2020 12:43:13",
                      author: "friend"
                    },
                    {
                      message: "Ut sunt cupidatat occaecat incididunt enim nisi non elit irure nulla mollit. Veniam quis incididunt labore est id et esse sit labore id ullamco. Qui ad occaecat excepteur proident duis labore.\r\n",
                      time: "05/06/2019 14:54:16",
                      author: "friend"
                    },
                    {
                      message: "Esse aliqua ea aliquip aute officia aute pariatur Lorem nisi magna laborum. Cupidatat in nisi proident consequat amet reprehenderit adipisicing officia eu. Commodo nisi culpa occaecat laboris in nisi culpa incididunt adipisicing sint exercitation laboris in.\r\n",
                      time: "05/05/2020 21:28:35",
                      author: "friend"
                    },
                    {
                      message: "Aliquip ea officia in esse ea enim et ad ea laboris magna mollit cillum. Tempor cillum consectetur nulla ipsum amet ullamco sunt amet ut. Minim aliquip laborum aute ipsum reprehenderit eiusmod quis eu duis pariatur laborum enim. Lorem nisi ad officia do fugiat exercitation. Proident Lorem eu velit commodo. Laboris enim et dolor voluptate cupidatat magna aute. Tempor laborum sit ipsum excepteur exercitation et et eiusmod eu ex.\r\n",
                      time: "09/10/2019 07:15:15",
                      author: "sending"
                    }
                  ]
                },
                {
                  id: 4,
                  name: "Sylvia Christensen",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/17.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Eu ullamco fugiat non excepteur. Minim ut ut cupidatat cupidatat et non duis dolor laboris et ipsum incididunt et labore. Aliqua aute enim consectetur ad reprehenderit cupidatat enim amet voluptate laboris in dolore labore. Dolore quis quis pariatur non velit sint incididunt sit do consequat Lorem nostrud elit. Cillum duis sit minim id sint Lorem labore ad sunt nulla.\r\n",
                      time: "09/07/2020 16:30:35",
                      author: "friend"
                    },
                    {
                      message: "Ea anim deserunt sit aliqua pariatur ut exercitation labore reprehenderit irure minim deserunt aliqua. Nulla esse labore dolor et nisi eiusmod pariatur labore cupidatat officia ea. Adipisicing voluptate culpa nulla minim veniam ex.\r\n",
                      time: "23/01/2020 02:30:30",
                      author: "friend"
                    },
                    {
                      message: "Fugiat Lorem est mollit aliqua aliquip. Cillum ea officia do pariatur ipsum consectetur officia culpa quis culpa et nulla. Sunt dolore commodo Lorem proident. Et mollit nisi tempor anim ex consectetur deserunt commodo deserunt in proident minim exercitation voluptate. Qui fugiat culpa cupidatat dolor enim pariatur.\r\n",
                      time: "04/11/2019 02:12:22",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit tempor reprehenderit mollit aliqua. Aute eu ex occaecat anim culpa eu amet. Enim consectetur pariatur fugiat veniam excepteur dolor enim sit labore ea veniam esse adipisicing. Aute amet sint aliquip sint fugiat sit nostrud dolor fugiat labore do velit exercitation.\r\n",
                      time: "21/11/2019 04:15:22",
                      author: "sending"
                    },
                    {
                      message: "Nostrud non aliqua veniam velit Lorem nostrud ad qui ex dolor cillum culpa. In excepteur id deserunt consectetur minim pariatur. Voluptate deserunt ut incididunt consectetur sit occaecat esse sit Lorem veniam deserunt. Est elit consequat nostrud irure elit duis esse dolore laboris non aliqua ad officia. Officia est adipisicing nisi nulla aute amet irure qui culpa. Et ipsum voluptate aliqua irure magna anim sunt irure qui duis voluptate ea.\r\n",
                      time: "08/05/2019 22:40:13",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod veniam aliqua id deserunt culpa cillum amet et anim cillum non labore cupidatat. Tempor officia laborum incididunt id consequat enim in amet mollit occaecat consequat. Id anim Lorem irure mollit. Et eu elit aute consequat fugiat labore sint amet amet dolor. Sint nisi reprehenderit id Lorem mollit sit laborum reprehenderit ullamco.\r\n",
                      time: "04/05/2020 23:20:23",
                      author: "friend"
                    },
                    {
                      message: "Amet eu elit esse quis minim culpa nulla. Ex tempor labore Lorem aliquip eiusmod. Veniam non tempor magna dolore magna anim aute ullamco id veniam enim dolore nostrud in. Enim aliqua excepteur id fugiat laborum commodo deserunt do deserunt labore reprehenderit incididunt. Proident esse eu amet ea officia esse veniam do nulla eiusmod consectetur ea nisi exercitation.\r\n",
                      time: "19/02/2019 20:49:46",
                      author: "sending"
                    },
                    {
                      message: "Ullamco nisi mollit commodo reprehenderit est proident fugiat est anim sit ex nisi laborum. Deserunt sit ullamco culpa non qui in minim sint deserunt minim cupidatat nulla ut. Est dolore aute voluptate sint duis consectetur ad ut exercitation commodo ad ad non. Aliquip cillum et sunt duis excepteur laboris fugiat irure exercitation qui velit duis irure nostrud. Officia nisi labore ad mollit occaecat quis exercitation in irure ipsum exercitation eiusmod proident.\r\n",
                      time: "03/02/2020 20:47:08",
                      author: "sending"
                    },
                    {
                      message: "Nostrud sit consectetur sit ad cupidatat irure irure sunt elit do aute mollit nisi. Dolore enim est exercitation ullamco cupidatat laboris exercitation tempor dolore non incididunt minim duis. Excepteur Lorem consequat ex ad ea culpa non velit.\r\n",
                      time: "24/03/2019 23:00:08",
                      author: "sending"
                    },
                    {
                      message: "Enim dolore do minim tempor. Fugiat amet in deserunt aute. Culpa veniam sit id commodo culpa qui nostrud culpa.\r\n",
                      time: "29/03/2020 20:17:28",
                      author: "sending"
                    },
                    {
                      message: "Aliquip minim enim labore elit anim mollit est. Deserunt quis fugiat deserunt minim ex esse labore sint cupidatat. Incididunt nostrud reprehenderit nostrud dolore.\r\n",
                      time: "19/07/2019 08:10:03",
                      author: "friend"
                    },
                    {
                      message: "Irure reprehenderit enim aute commodo laboris sunt qui ullamco proident duis ipsum eiusmod. Laborum pariatur exercitation magna nulla irure do anim duis nisi tempor nulla enim. Sint labore aliqua aliqua Lorem aliqua. Anim esse amet duis proident dolore eu minim in et irure elit fugiat esse.\r\n",
                      time: "31/01/2020 02:12:02",
                      author: "sending"
                    },
                    {
                      message: "Magna quis veniam voluptate quis. Exercitation reprehenderit magna ipsum est cupidatat. Consequat fugiat consequat deserunt reprehenderit irure pariatur eiusmod nulla magna cupidatat qui ad. Nostrud aute et quis et officia nisi do eu eu id ut. Nostrud deserunt nulla irure nulla pariatur proident anim consectetur. Sit proident adipisicing laboris culpa nostrud cupidatat quis amet cillum. Dolor sunt aute nostrud ipsum proident ullamco incididunt irure et amet adipisicing occaecat veniam.\r\n",
                      time: "06/05/2020 12:16:26",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod est do sit eiusmod laborum ea ad laboris id ad sit deserunt. Ad aute nulla sit cupidatat sint in culpa fugiat anim ad incididunt mollit pariatur eiusmod. Veniam proident Lorem qui aliqua laborum ullamco esse dolore elit magna. Duis pariatur elit nisi nulla irure nostrud est in irure veniam sunt ut incididunt.\r\n",
                      time: "15/11/2019 03:29:18",
                      author: "sending"
                    },
                    {
                      message: "Consequat nulla laboris culpa dolore officia enim enim ut consequat veniam mollit ullamco. Dolor laboris fugiat consectetur fugiat dolore quis voluptate tempor anim consequat deserunt reprehenderit eu irure. Ex amet in proident esse ullamco. Eiusmod cillum do aute laboris duis nisi incididunt quis qui consectetur labore pariatur. Nostrud eu qui aute irure exercitation consequat culpa sit occaecat. Eu esse cillum et excepteur est sint mollit enim esse laborum ex.\r\n",
                      time: "29/02/2020 13:02:14",
                      author: "sending"
                    },
                    {
                      message: "Tempor id eiusmod cillum laborum do commodo in. Excepteur dolor officia ut occaecat esse quis in sint deserunt eu consequat. Exercitation nostrud anim aliqua ut incididunt officia Lorem qui consectetur aliqua quis. Esse enim laborum cupidatat minim veniam irure consectetur non incididunt occaecat incididunt.\r\n",
                      time: "11/02/2020 23:18:57",
                      author: "sending"
                    },
                    {
                      message: "Reprehenderit fugiat incididunt dolor ut fugiat amet ipsum non eu enim culpa. Dolor elit ut aute ex incididunt cillum do Lorem occaecat Lorem ad nisi laboris sit. Proident commodo duis amet est ex esse.\r\n",
                      time: "16/05/2020 08:24:39",
                      author: "friend"
                    },
                    {
                      message: "Exercitation occaecat pariatur Lorem consectetur deserunt in sint et ullamco magna duis. Voluptate sit labore minim nisi dolore dolore duis aliqua labore sunt. Laboris commodo amet enim ullamco eiusmod sint qui minim. Occaecat ad exercitation quis aute aliquip esse. Id deserunt sint elit veniam do pariatur fugiat. Excepteur quis consectetur pariatur sit aliqua deserunt.\r\n",
                      time: "15/11/2019 22:16:35",
                      author: "sending"
                    },
                    {
                      message: "Incididunt aliqua cillum dolore excepteur veniam eu adipisicing et veniam quis. Culpa fugiat mollit minim labore excepteur elit ad ea ex amet tempor. Quis elit eiusmod minim ut elit labore officia veniam fugiat esse. Aute elit reprehenderit consectetur excepteur proident non amet ea proident. Deserunt aliqua enim in ad non pariatur commodo et nisi eu qui enim magna. Velit sunt sunt dolore laboris esse exercitation adipisicing ad eiusmod deserunt sint eu irure.\r\n",
                      time: "30/04/2020 17:35:36",
                      author: "sending"
                    },
                    {
                      message: "Non eu magna Lorem occaecat in ipsum minim non dolor exercitation sit non. Labore sunt dolor elit amet pariatur culpa consequat ea amet eiusmod elit mollit anim deserunt. Eiusmod consequat irure eu eiusmod eiusmod dolore qui laborum et qui ullamco. Cupidatat ipsum ut et consequat non eiusmod reprehenderit elit dolore non veniam proident sit aliqua. Anim amet nulla cupidatat amet nostrud irure proident est aliquip amet labore. Ut aliqua duis reprehenderit proident ex ipsum.\r\n",
                      time: "09/12/2019 03:02:06",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 5,
                  name: "Ellen Hale",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/34.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Ea tempor deserunt officia fugiat do excepteur fugiat do non elit sunt irure incididunt qui. Est ex tempor laborum id ipsum ex in sunt. In sint ea consectetur Lorem nulla eiusmod minim. Nulla mollit aute deserunt minim exercitation. Ea consequat veniam commodo proident voluptate qui in aliquip cupidatat aliquip. Culpa exercitation pariatur sit id ex consequat pariatur cillum ad ullamco officia irure fugiat nisi.\r\n",
                      time: "04/10/2019 04:20:02",
                      author: "sending"
                    },
                    {
                      message: "Eiusmod sunt mollit Lorem ullamco nulla velit cillum ullamco tempor eu. Aliqua nisi consectetur eiusmod cupidatat sit aliqua enim sint. Ipsum minim amet dolore proident cillum exercitation qui duis culpa. Aliquip et sint pariatur est proident eiusmod. Culpa do excepteur ipsum occaecat nisi et occaecat aliqua irure ex veniam fugiat Lorem excepteur. Non aliqua magna nostrud pariatur do proident anim et adipisicing commodo qui duis ullamco.\r\n",
                      time: "26/09/2019 10:25:43",
                      author: "sending"
                    },
                    {
                      message: "Enim in aliquip consequat est non velit non cupidatat do ex. Ullamco eu eiusmod Lorem pariatur culpa. Deserunt exercitation nisi id non aliqua aute elit commodo. Do Lorem quis minim cillum non elit labore adipisicing excepteur tempor voluptate nostrud. Consectetur Lorem nostrud minim ipsum labore eiusmod et ut eu mollit officia adipisicing quis.\r\n",
                      time: "14/08/2020 03:08:26",
                      author: "sending"
                    },
                    {
                      message: "Veniam irure deserunt nisi aliqua et exercitation voluptate quis adipisicing id. Irure sint sint commodo ex cupidatat occaecat. Cillum occaecat consequat incididunt fugiat ut in irure in. Pariatur eiusmod proident sunt sunt incididunt pariatur dolore mollit. Adipisicing commodo ex cillum mollit tempor culpa. Enim reprehenderit aliquip eu fugiat nisi. Proident laboris amet adipisicing aute ea dolor magna quis irure cillum mollit sint incididunt.\r\n",
                      time: "19/06/2020 18:19:05",
                      author: "friend"
                    },
                    {
                      message: "In nulla officia dolore ullamco elit. Ipsum cillum sint proident occaecat mollit consectetur irure tempor proident ad magna qui commodo nostrud. Cupidatat nostrud ipsum enim enim Lorem duis id sit aute aliquip dolor tempor est.\r\n",
                      time: "04/09/2020 14:57:14",
                      author: "friend"
                    },
                    {
                      message: "Consectetur sit nulla cillum sint culpa excepteur et voluptate officia commodo voluptate commodo deserunt. Fugiat Lorem nostrud reprehenderit cupidatat do laboris aliqua aute dolore ullamco nulla ut labore est. Excepteur est eiusmod aute eiusmod nisi sunt cupidatat aute eu magna duis cillum amet. Irure cupidatat culpa pariatur aliquip excepteur cupidatat sint excepteur sit qui adipisicing incididunt et incididunt. Ea ex aliquip consequat id. Esse quis sunt ad culpa nostrud consequat nostrud nisi magna nisi. Mollit anim eu culpa ipsum nulla cillum laborum aute laborum cupidatat.\r\n",
                      time: "01/02/2020 18:31:14",
                      author: "sending"
                    },
                    {
                      message: "Laborum dolore officia proident mollit ut nulla ad ad. Culpa dolore officia officia aliqua dolore dolore sunt officia laborum enim occaecat veniam dolor commodo. Excepteur deserunt et sit excepteur veniam esse in excepteur officia fugiat ut. Reprehenderit aliqua fugiat aliqua ad id occaecat elit. Ipsum exercitation minim et sunt minim do dolor minim incididunt commodo reprehenderit. Anim esse eiusmod incididunt Lorem ipsum velit mollit ad amet dolor veniam et incididunt quis. Veniam fugiat fugiat sit laborum duis in sit est nulla deserunt aute.\r\n",
                      time: "29/05/2019 03:14:13",
                      author: "sending"
                    },
                    {
                      message: "Nisi ea cillum quis ea. Esse non nostrud laborum quis irure cupidatat mollit laboris laboris irure ex officia. Nostrud laboris deserunt commodo in sint tempor. Sunt magna sit excepteur anim laboris in ullamco enim commodo. Nisi nostrud cillum qui sit culpa nostrud id officia. Exercitation et sit adipisicing ipsum ex id in laboris amet.\r\n",
                      time: "06/05/2020 16:52:39",
                      author: "sending"
                    },
                    {
                      message: "Qui reprehenderit mollit id aute nulla nisi sunt nostrud. Exercitation labore ea mollit do fugiat Lorem irure officia do elit sint nisi laborum. Consequat sunt eiusmod velit mollit ut velit magna reprehenderit aute. Aliquip aliqua sit consequat aute fugiat elit. Veniam eiusmod sint laborum reprehenderit officia aute irure voluptate voluptate ut est mollit consectetur.\r\n",
                      time: "23/09/2019 18:11:34",
                      author: "sending"
                    },
                    {
                      message: "Laborum incididunt adipisicing irure ad eu mollit incididunt proident. Lorem ipsum proident irure duis duis id anim sit in amet minim. Excepteur quis nulla amet et sint. Tempor deserunt adipisicing nisi sint do cillum sit aliqua eu magna quis eu adipisicing mollit. Amet tempor duis eu do ipsum eu ut et non anim proident officia. Sint cupidatat tempor culpa ut elit eu enim ea velit ut aute velit.\r\n",
                      time: "06/04/2019 00:57:29",
                      author: "sending"
                    },
                    {
                      message: "Tempor eu commodo aliquip officia anim esse consequat id velit voluptate nisi minim pariatur ea. Do velit anim fugiat mollit qui voluptate. Deserunt consectetur quis sit ea veniam sit consectetur minim minim qui ipsum aliquip adipisicing veniam.\r\n",
                      time: "21/03/2019 05:58:19",
                      author: "friend"
                    },
                    {
                      message: "Velit duis duis anim ut labore. Ex veniam exercitation cillum ullamco cupidatat nostrud amet laborum nulla ad pariatur ullamco nostrud. Quis magna laboris ipsum sit esse ut magna nulla mollit ad id. Occaecat incididunt enim exercitation voluptate eiusmod mollit elit dolor officia tempor id ullamco.\r\n",
                      time: "30/07/2019 07:52:25",
                      author: "friend"
                    },
                    {
                      message: "Pariatur incididunt officia officia qui pariatur amet nulla do quis excepteur labore tempor. Nulla est qui duis exercitation eiusmod ullamco aliquip. Minim qui aute do dolore esse. Culpa minim laborum proident ipsum tempor ut esse.\r\n",
                      time: "23/06/2019 15:06:04",
                      author: "friend"
                    },
                    {
                      message: "Aliquip irure velit esse aute amet deserunt non labore pariatur ullamco anim qui laboris. Reprehenderit qui aute labore cupidatat fugiat incididunt nostrud ut pariatur labore laborum. Non laborum deserunt veniam occaecat. Voluptate dolor amet tempor consequat quis culpa enim dolore. Enim aute veniam proident sint laborum fugiat ea duis.\r\n",
                      time: "27/06/2020 08:20:02",
                      author: "friend"
                    },
                    {
                      message: "Et ipsum veniam qui ad reprehenderit duis excepteur qui ex adipisicing. Ullamco adipisicing culpa est occaecat irure eu occaecat laboris quis eiusmod enim eiusmod occaecat eu. Cupidatat aute ullamco tempor dolor nulla id do in eu. Dolor mollit amet cupidatat occaecat culpa excepteur. Aute eiusmod officia deserunt officia qui non sint in labore Lorem nostrud in culpa anim. Ipsum qui nulla id aute consectetur do. Ut incididunt laborum nisi aliquip voluptate anim voluptate Lorem ut dolor culpa magna.\r\n",
                      time: "05/07/2019 03:12:40",
                      author: "sending"
                    },
                    {
                      message: "Proident in deserunt amet culpa Lorem labore do. Sunt dolore occaecat in nulla eu occaecat excepteur nulla qui sit nisi aliqua irure. Fugiat irure anim ea id laboris quis nostrud et deserunt duis ipsum quis reprehenderit Lorem. Sunt ad labore excepteur eiusmod aliqua fugiat in magna excepteur consectetur id dolor commodo. Cillum laboris sit ipsum ipsum pariatur dolor nostrud mollit. Veniam minim labore pariatur qui sit voluptate minim non eiusmod magna aute minim.\r\n",
                      time: "04/12/2019 16:00:54",
                      author: "friend"
                    },
                    {
                      message: "Tempor eiusmod eiusmod anim occaecat sunt elit et magna non. Ullamco non mollit tempor et ea. Elit exercitation dolore voluptate qui amet ex adipisicing voluptate. Pariatur irure eu labore sit cupidatat laboris.\r\n",
                      time: "07/03/2020 04:51:08",
                      author: "sending"
                    },
                    {
                      message: "Consectetur ex ullamco reprehenderit laboris commodo. Pariatur qui eu ea et amet ad eiusmod enim cillum dolor do nisi. Eu labore adipisicing velit qui elit fugiat voluptate proident pariatur qui esse elit elit consectetur.\r\n",
                      time: "05/07/2019 12:36:17",
                      author: "friend"
                    },
                    {
                      message: "Elit laborum labore sit duis officia. Est ad ad proident ea laborum fugiat labore incididunt. Commodo reprehenderit anim magna enim aute labore quis irure incididunt do mollit. In sit eu excepteur eiusmod aute nisi deserunt cupidatat occaecat reprehenderit eiusmod sit. Sit elit reprehenderit incididunt exercitation labore laborum ut ullamco aliquip aliqua. Ea mollit minim do tempor consequat ipsum eiusmod quis. Veniam voluptate nisi incididunt deserunt elit eiusmod consectetur nulla anim labore officia velit ex.\r\n",
                      time: "08/12/2019 12:11:03",
                      author: "sending"
                    },
                    {
                      message: "Consequat adipisicing fugiat laborum cupidatat dolore ipsum quis consectetur eu culpa excepteur culpa quis. Labore cupidatat tempor nisi enim reprehenderit laborum ipsum occaecat laboris nostrud est Lorem proident. Quis aute Lorem pariatur sunt tempor proident dolore voluptate nulla. Ad eiusmod eiusmod labore eu aliquip velit nisi. Enim nulla incididunt adipisicing ullamco sit irure eu sit Lorem. Ex sit occaecat esse exercitation id sunt sit et minim.\r\n",
                      time: "18/10/2019 00:16:03",
                      author: "sending"
                    },
                    {
                      message: "Consectetur fugiat veniam aliquip quis aliqua qui tempor anim non laboris sunt. Consequat nisi cillum sunt eiusmod amet sunt. Esse cupidatat esse consequat minim reprehenderit culpa irure sint nisi qui fugiat labore ipsum qui. Et nisi elit anim cillum reprehenderit magna occaecat occaecat. Aliqua excepteur esse anim ad. Sint duis proident ut reprehenderit reprehenderit voluptate eu nisi dolore ipsum mollit consectetur. Lorem nostrud non ullamco minim et voluptate adipisicing officia et esse duis est non do.\r\n",
                      time: "25/02/2019 18:53:55",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod eu eu ad fugiat mollit proident dolor do irure laboris reprehenderit anim ex elit. Est amet cillum esse dolor ullamco minim. Do dolor incididunt magna ipsum sint mollit aliqua fugiat cupidatat adipisicing nostrud culpa reprehenderit cupidatat. Irure aliquip incididunt tempor magna ipsum ea non officia deserunt. Aliqua incididunt velit proident eu ipsum culpa duis dolore.\r\n",
                      time: "18/08/2019 12:11:16",
                      author: "sending"
                    },
                    {
                      message: "Incididunt Lorem consequat eu nisi est laborum aliqua. Incididunt reprehenderit nulla laboris ex labore culpa tempor id amet. Occaecat consectetur qui ad qui aliquip eiusmod amet.\r\n",
                      time: "20/12/2019 07:43:28",
                      author: "friend"
                    },
                    {
                      message: "Sint exercitation consequat excepteur aute ea laboris. Ullamco officia officia commodo fugiat sunt anim aliquip irure ipsum Lorem nulla esse. Occaecat deserunt laborum cillum quis in qui veniam consequat.\r\n",
                      time: "21/07/2019 21:07:52",
                      author: "friend"
                    },
                    {
                      message: "Ea reprehenderit aliquip pariatur in pariatur elit. Deserunt amet mollit nulla dolor tempor dolor aliqua reprehenderit dolore proident. Velit id cupidatat elit labore culpa. Excepteur eu amet consequat ea excepteur nisi labore ea eu officia.\r\n",
                      time: "13/01/2020 20:23:26",
                      author: "friend"
                    },
                    {
                      message: "Minim pariatur nostrud ad laboris. Ea amet quis nulla cillum commodo tempor qui proident officia. Labore duis minim eu ipsum officia aliqua dolor id cillum id consectetur excepteur enim. Ea exercitation cupidatat adipisicing consectetur laboris quis esse occaecat cillum Lorem. Voluptate laborum cillum cupidatat anim consequat sunt aliqua reprehenderit pariatur culpa. Amet mollit ullamco amet esse officia consequat fugiat mollit tempor. Nisi reprehenderit incididunt enim nostrud irure proident proident voluptate sunt cupidatat cupidatat magna non aute.\r\n",
                      time: "06/04/2019 05:58:18",
                      author: "sending"
                    },
                    {
                      message: "Magna commodo est ullamco cillum nulla occaecat laboris. Esse consectetur proident proident proident irure tempor pariatur. Dolor officia voluptate esse elit tempor. Culpa aliquip officia incididunt labore est tempor. Lorem id pariatur in commodo consectetur labore ipsum proident.\r\n",
                      time: "03/08/2020 12:21:57",
                      author: "sending"
                    },
                    {
                      message: "Dolore est quis esse velit occaecat reprehenderit incididunt consequat consequat minim proident. Reprehenderit sunt nostrud cillum non cupidatat. Quis ex quis consectetur ad.\r\n",
                      time: "08/01/2020 14:49:42",
                      author: "friend"
                    },
                    {
                      message: "Dolor fugiat est anim pariatur Lorem laborum ex culpa quis. Exercitation anim excepteur ut mollit veniam tempor. Id mollit dolor elit consectetur nulla adipisicing tempor ut deserunt ea cillum officia ex enim. Fugiat minim officia reprehenderit reprehenderit magna in sunt ad eiusmod incididunt.\r\n",
                      time: "20/01/2020 23:08:38",
                      author: "sending"
                    },
                    {
                      message: "Amet commodo ullamco reprehenderit magna amet laborum commodo occaecat deserunt sint amet amet ex dolor. Esse ullamco mollit labore ex dolore. Ipsum est fugiat ut in incididunt ad elit aute ullamco sint ipsum.\r\n",
                      time: "12/06/2019 05:16:26",
                      author: "sending"
                    },
                    {
                      message: "Veniam aute ut cupidatat dolore. Sunt non proident fugiat ex. Consequat quis aliquip commodo nulla amet proident exercitation sint esse et nostrud anim eiusmod laborum. Id laboris sit do et. Sit ea velit cillum consequat voluptate do esse nostrud magna fugiat dolore. Voluptate velit sunt qui ex excepteur minim anim minim ea elit commodo sunt elit. Officia cupidatat duis exercitation cupidatat.\r\n",
                      time: "10/09/2020 18:35:35",
                      author: "friend"
                    },
                    {
                      message: "Amet magna ex fugiat aute Lorem ad laborum veniam in est anim sint deserunt duis. Mollit sit eu ipsum veniam aliquip. Adipisicing aute deserunt culpa irure cupidatat eiusmod voluptate consequat esse laboris adipisicing fugiat. Proident enim sint elit laborum ex. Cupidatat magna labore quis adipisicing dolor nostrud velit occaecat exercitation anim ullamco excepteur eiusmod esse. Esse officia aute occaecat dolore Lorem veniam veniam dolor amet ullamco do id aliqua et.\r\n",
                      time: "28/06/2019 12:54:40",
                      author: "friend"
                    },
                    {
                      message: "Elit nostrud eu excepteur ex eu velit deserunt deserunt laboris laboris Lorem nulla consectetur reprehenderit. Dolor labore ex enim irure proident. Ut aute eiusmod Lorem elit laborum ea aliquip quis adipisicing enim proident laborum anim enim. Nulla anim duis nisi duis labore ut Lorem aliqua in Lorem eu enim nisi pariatur. Veniam nostrud veniam nostrud elit adipisicing amet nostrud labore minim id pariatur. Proident labore irure proident consequat laborum aliquip et id aute deserunt magna reprehenderit. Consequat est quis mollit pariatur proident excepteur dolor qui labore amet non.\r\n",
                      time: "07/08/2020 01:57:30",
                      author: "sending"
                    },
                    {
                      message: "Esse cupidatat ex labore aliqua veniam aute ex eiusmod in. In aliquip consectetur deserunt nostrud quis cupidatat enim enim occaecat labore. Est ex reprehenderit do mollit labore ad exercitation ea in sint ullamco ad. Mollit qui laboris magna consequat do ullamco duis amet.\r\n",
                      time: "15/01/2020 12:13:57",
                      author: "friend"
                    },
                    {
                      message: "Consectetur laboris duis commodo fugiat non elit officia commodo. Enim magna eiusmod exercitation reprehenderit ullamco amet consequat. Nisi velit anim laboris incididunt eu amet aliquip duis et commodo consectetur anim.\r\n",
                      time: "21/04/2020 17:52:44",
                      author: "sending"
                    },
                    {
                      message: "Lorem nostrud consectetur dolor proident magna aliqua ad aliquip sint nulla adipisicing consequat incididunt. Reprehenderit aute officia eu ullamco duis fugiat enim sunt est esse aliqua. Velit elit id eu do sint culpa laboris esse elit. Cillum labore minim magna nisi ea non irure esse irure tempor non aliqua. Et aliquip enim aliquip et adipisicing enim commodo.\r\n",
                      time: "12/07/2019 02:00:36",
                      author: "friend"
                    },
                    {
                      message: "Nostrud fugiat duis excepteur irure labore aute voluptate cupidatat dolor esse deserunt eiusmod nisi. Proident sint esse eiusmod excepteur. Commodo cillum nisi aute ea proident anim proident commodo incididunt nostrud consectetur dolore quis sint. Aute adipisicing ipsum nostrud ea ex voluptate duis fugiat occaecat aliquip mollit eiusmod eu. Irure sint non aliquip ut cillum occaecat incididunt esse commodo labore laboris.\r\n",
                      time: "18/04/2020 16:49:46",
                      author: "friend"
                    },
                    {
                      message: "Ea non irure amet amet do magna et culpa ea mollit cupidatat Lorem consectetur. Sint excepteur fugiat laboris irure anim aute. Deserunt sit amet labore velit anim fugiat ea. Nulla duis do aliqua magna esse. Ex anim culpa ut amet id. Elit qui exercitation exercitation laborum. Id exercitation amet ad ut dolore fugiat adipisicing do incididunt deserunt.\r\n",
                      time: "16/01/2020 21:21:11",
                      author: "friend"
                    },
                    {
                      message: "Anim aliqua nostrud id ex commodo esse magna commodo in in. Laboris amet labore consectetur qui mollit. Est veniam non proident irure in dolor sunt minim eu in do exercitation reprehenderit ad. Sunt deserunt eu ad amet magna.\r\n",
                      time: "18/10/2019 05:36:42",
                      author: "friend"
                    },
                    {
                      message: "Magna magna excepteur mollit cillum sint voluptate. Labore nulla ipsum nostrud consectetur eiusmod sunt esse aliquip do quis voluptate ea aliquip elit. Lorem culpa excepteur qui labore amet velit. Lorem adipisicing deserunt voluptate ullamco ullamco esse consectetur nostrud nisi velit dolore exercitation ad aliqua.\r\n",
                      time: "02/04/2019 17:43:36",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 6,
                  name: "Vaughn Nolan",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/23.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Lorem aliquip ipsum est reprehenderit sint laboris irure. Exercitation pariatur occaecat amet do elit eiusmod sint ipsum commodo sint ad anim proident sunt. Reprehenderit incididunt reprehenderit duis dolor adipisicing occaecat commodo Lorem id ipsum et consectetur. Occaecat nulla proident quis in commodo laborum nostrud tempor. Ex deserunt quis aute do ut proident voluptate ad laborum. Ex consequat eu exercitation enim ullamco. Do et mollit amet proident ea.\r\n",
                      time: "02/02/2020 20:03:32",
                      author: "sending"
                    },
                    {
                      message: "In pariatur aliquip sit excepteur nostrud. Eiusmod Lorem deserunt enim consequat deserunt do et. Nisi tempor minim officia et veniam occaecat ex culpa.\r\n",
                      time: "25/10/2019 23:54:51",
                      author: "friend"
                    },
                    {
                      message: "Pariatur esse est ullamco cupidatat non incididunt duis ex in cillum reprehenderit dolor exercitation. Et labore consectetur eu quis ex qui tempor in eu ea sunt exercitation. Anim ex anim pariatur do sint Lorem eu.\r\n",
                      time: "19/03/2019 04:39:09",
                      author: "friend"
                    },
                    {
                      message: "Exercitation velit et qui est eiusmod reprehenderit. Id deserunt quis eiusmod cillum ut. Consectetur anim ad et officia ullamco nisi incididunt consequat mollit ullamco est. Laboris in ex in sint quis sit proident aliquip.\r\n",
                      time: "01/11/2019 01:58:47",
                      author: "sending"
                    },
                    {
                      message: "Ipsum velit amet laborum ad consectetur eu. Excepteur adipisicing laborum irure tempor fugiat. Laborum commodo eiusmod eu consequat commodo sint officia adipisicing cupidatat laborum elit proident id. Ad consectetur ex culpa consectetur in tempor non consectetur ex. Laborum enim sit occaecat reprehenderit ut do exercitation consectetur est officia ut excepteur reprehenderit.\r\n",
                      time: "31/05/2019 03:36:09",
                      author: "friend"
                    },
                    {
                      message: "Cupidatat mollit pariatur quis sit est in sit mollit laboris sint incididunt voluptate pariatur. Aute irure non adipisicing eu id incididunt. Dolor velit occaecat eiusmod sunt eu deserunt reprehenderit.\r\n",
                      time: "04/04/2019 03:35:49",
                      author: "sending"
                    },
                    {
                      message: "Proident est velit ex fugiat sunt laborum in sit velit mollit aute id. Dolor deserunt ad adipisicing ex eiusmod veniam commodo. Duis excepteur eiusmod reprehenderit labore officia labore officia proident sunt ullamco dolor dolore. Veniam eiusmod incididunt proident eiusmod eiusmod.\r\n",
                      time: "02/12/2019 04:02:16",
                      author: "sending"
                    },
                    {
                      message: "Ad in dolor non elit. Excepteur pariatur reprehenderit est nulla anim est. Lorem officia velit magna non in cillum ut ut laboris. Eu culpa pariatur veniam anim cupidatat proident excepteur aliqua culpa velit. Nostrud consectetur elit elit pariatur.\r\n",
                      time: "09/02/2020 02:40:11",
                      author: "friend"
                    },
                    {
                      message: "Enim exercitation deserunt do incididunt exercitation excepteur cillum mollit esse adipisicing adipisicing culpa. Proident ipsum culpa aliqua sunt reprehenderit sunt sint commodo nulla. Enim magna non tempor fugiat proident nostrud.\r\n",
                      time: "17/04/2019 21:57:50",
                      author: "sending"
                    },
                    {
                      message: "Est velit sunt fugiat do irure. Duis labore consectetur fugiat non veniam eiusmod est do consectetur. Exercitation est qui labore elit esse quis reprehenderit exercitation consectetur. Pariatur ut et veniam culpa veniam anim in aute duis nostrud nostrud. Eiusmod irure eu in enim anim nulla adipisicing in duis proident voluptate. Commodo id pariatur aliquip id tempor consectetur consectetur reprehenderit anim aute aute.\r\n",
                      time: "17/07/2019 11:28:39",
                      author: "sending"
                    },
                    {
                      message: "Commodo laborum cupidatat aliquip in aute proident occaecat adipisicing tempor duis. Nulla id aliquip nisi deserunt eu aliqua. Et reprehenderit irure veniam aliquip do minim nisi sit occaecat pariatur. Culpa nostrud occaecat qui adipisicing enim laboris dolor eu. Irure aliqua non irure est officia. Pariatur in veniam ipsum amet. Dolor ipsum veniam aute incididunt irure.\r\n",
                      time: "13/07/2019 03:10:50",
                      author: "friend"
                    },
                    {
                      message: "Mollit quis aliquip duis excepteur labore ut et et id pariatur consectetur. Aliqua incididunt officia quis commodo aliqua. Nulla nulla dolor adipisicing exercitation elit aliquip quis cillum officia pariatur et. Adipisicing sit laboris in commodo duis ex adipisicing eiusmod esse ipsum laborum. Ullamco do eu ullamco aute quis tempor proident aliquip deserunt. Excepteur cillum do consequat esse eiusmod incididunt sit.\r\n",
                      time: "09/03/2020 20:15:52",
                      author: "sending"
                    },
                    {
                      message: "Incididunt anim non enim dolore nisi nulla culpa sint duis do. Labore excepteur ea laboris cupidatat et duis pariatur irure nulla sunt mollit. Lorem excepteur ad deserunt exercitation ipsum esse. Ea qui incididunt anim officia consectetur labore officia minim aliquip irure in.\r\n",
                      time: "23/01/2020 09:05:32",
                      author: "friend"
                    },
                    {
                      message: "Amet mollit nulla officia consequat pariatur nisi. Labore reprehenderit amet aute veniam minim elit esse magna ipsum reprehenderit. Ipsum aute aliqua qui duis voluptate. Voluptate cupidatat excepteur pariatur dolore sunt deserunt fugiat reprehenderit do nulla aliqua exercitation ullamco amet. Adipisicing Lorem duis incididunt ut aute nulla magna amet dolore. Irure ullamco id veniam cupidatat commodo nostrud fugiat voluptate reprehenderit sunt. Aliqua qui ipsum eu et veniam excepteur officia nostrud mollit ad aute.\r\n",
                      time: "12/03/2019 14:41:39",
                      author: "friend"
                    },
                    {
                      message: "Laborum aliqua cupidatat reprehenderit sunt ipsum pariatur sit dolore labore velit. Est ex ad incididunt dolor enim non duis. Dolor aliqua duis eu duis irure quis est sunt velit adipisicing adipisicing. Amet dolore ut consequat fugiat do minim ipsum laboris do. Labore voluptate labore reprehenderit sunt id non quis officia commodo excepteur est ut.\r\n",
                      time: "06/11/2019 06:10:17",
                      author: "friend"
                    },
                    {
                      message: "Lorem ut aliquip exercitation deserunt veniam non velit qui. Sint amet voluptate ea fugiat id eiusmod duis eiusmod in esse non ea. Veniam quis tempor qui sit proident. Dolor adipisicing fugiat dolore dolor veniam. Cillum veniam est sunt exercitation nulla. Occaecat labore incididunt aliquip cupidatat nisi commodo dolore laboris. Consectetur cillum velit velit laboris sint aliqua labore esse ipsum aute.\r\n",
                      time: "02/11/2019 12:55:50",
                      author: "sending"
                    },
                    {
                      message: "Quis deserunt pariatur ut laborum nisi eiusmod reprehenderit velit cillum enim ad. Minim pariatur exercitation sunt ipsum duis eiusmod ipsum amet aliqua Lorem et laborum Lorem. Enim cillum aliqua non qui exercitation reprehenderit id eiusmod pariatur adipisicing. Tempor aute Lorem aliquip ex commodo in non nulla non. Id dolor qui voluptate sint. Nostrud elit non dolor eu. Minim incididunt velit excepteur occaecat nulla sunt esse cillum amet.\r\n",
                      time: "04/02/2019 03:29:29",
                      author: "friend"
                    },
                    {
                      message: "Mollit velit ex nisi ad exercitation ut ea pariatur incididunt. Culpa veniam ullamco qui quis incididunt elit amet cillum ad occaecat culpa dolor in. Excepteur quis irure reprehenderit officia velit.\r\n",
                      time: "28/11/2019 17:27:44",
                      author: "friend"
                    },
                    {
                      message: "Non non nostrud consectetur elit velit occaecat irure aute enim irure. Enim in ut aliquip ex velit ullamco irure sit laborum. Cillum ipsum excepteur elit do laborum dolore deserunt ut laborum ut duis sunt eu. Sunt consectetur ex dolor nulla aliquip in cupidatat. Excepteur adipisicing fugiat eu proident sint ut occaecat. Aliqua reprehenderit culpa aliqua nulla.\r\n",
                      time: "01/10/2019 11:25:47",
                      author: "friend"
                    },
                    {
                      message: "Velit mollit nisi consequat sunt aliqua cillum quis. Velit tempor Lorem occaecat dolor nisi eiusmod sit tempor eiusmod adipisicing excepteur ut est ullamco. Magna velit anim enim et sit sit id officia elit laborum proident commodo adipisicing.\r\n",
                      time: "05/03/2019 17:40:47",
                      author: "sending"
                    },
                    {
                      message: "Amet esse fugiat ipsum excepteur officia eiusmod ex tempor aliquip. Nostrud laboris aliquip magna do irure aliqua. Laborum amet irure excepteur laboris. Ipsum minim qui aute ut minim incididunt mollit ad dolore laboris velit nulla cupidatat.\r\n",
                      time: "04/06/2019 14:27:04",
                      author: "sending"
                    },
                    {
                      message: "Commodo laboris occaecat consequat fugiat. Quis in mollit veniam nulla eiusmod dolore. Exercitation enim dolore ipsum velit. Sunt elit voluptate ipsum non dolore non. Voluptate ex quis ullamco consequat occaecat. Sint enim elit cillum anim proident in excepteur enim ea pariatur sit adipisicing.\r\n",
                      time: "26/08/2019 23:27:46",
                      author: "friend"
                    },
                    {
                      message: "Lorem sunt qui in cupidatat magna veniam occaecat. Amet ea dolore aliquip sunt mollit magna excepteur elit. In nostrud tempor consectetur nisi cupidatat voluptate sit sit nulla dolore sunt velit.\r\n",
                      time: "28/04/2019 01:29:39",
                      author: "friend"
                    },
                    {
                      message: "Incididunt sit deserunt adipisicing ad velit anim do fugiat. Excepteur reprehenderit ad est tempor excepteur non commodo officia adipisicing Lorem consectetur. Voluptate anim fugiat sint ad est mollit duis ipsum exercitation adipisicing esse cillum. Ipsum elit proident adipisicing veniam sit nostrud ea exercitation nisi Lorem. Commodo voluptate aute ad culpa dolor. Aute velit est do eiusmod sint duis. Sunt amet labore esse Lorem incididunt laboris adipisicing magna ullamco excepteur amet Lorem exercitation velit.\r\n",
                      time: "22/06/2020 14:12:55",
                      author: "sending"
                    },
                    {
                      message: "Quis veniam sit minim tempor velit ad veniam cillum non occaecat consectetur. Anim ullamco esse voluptate in qui et mollit nostrud consectetur. Et nostrud cillum duis occaecat magna adipisicing sint minim nulla in non. Incididunt commodo veniam sit adipisicing ea ipsum amet incididunt ut tempor est adipisicing id. Amet anim pariatur ullamco id velit occaecat excepteur nulla tempor ipsum officia velit. Id exercitation do cillum culpa ad tempor nisi.\r\n",
                      time: "07/04/2019 09:08:54",
                      author: "sending"
                    },
                    {
                      message: "Fugiat deserunt laboris eiusmod amet sint est do veniam incididunt. Cillum proident laboris elit adipisicing proident exercitation incididunt anim nisi. Voluptate sit tempor commodo incididunt tempor proident magna ad aute in cupidatat ipsum ad. Adipisicing voluptate Lorem pariatur quis laboris duis deserunt aute veniam.\r\n",
                      time: "23/08/2019 00:46:44",
                      author: "friend"
                    },
                    {
                      message: "Aliqua id est enim velit dolor in qui ea irure eiusmod veniam magna adipisicing. Eu anim eu excepteur elit esse ad laborum do laboris aliqua sint non officia. Occaecat Lorem ullamco culpa do laboris in laborum laboris adipisicing incididunt do qui labore.\r\n",
                      time: "19/08/2020 20:18:19",
                      author: "sending"
                    },
                    {
                      message: "Non occaecat qui et reprehenderit. Ut Lorem occaecat ipsum excepteur enim occaecat aliqua. Sunt commodo labore anim in. Proident in incididunt et ut ea.\r\n",
                      time: "21/05/2019 03:14:15",
                      author: "sending"
                    },
                    {
                      message: "Proident irure qui excepteur pariatur labore. Nisi culpa sunt voluptate consectetur officia laborum exercitation dolore. Lorem commodo minim minim dolore labore adipisicing voluptate amet voluptate.\r\n",
                      time: "04/05/2019 08:06:35",
                      author: "sending"
                    },
                    {
                      message: "Fugiat in est labore ex minim irure ullamco aliquip id. Excepteur culpa magna laborum commodo labore adipisicing duis. Esse ut exercitation dolor ad aliqua deserunt non nostrud dolor ullamco. Est enim mollit exercitation quis qui nulla et incididunt sint consequat consequat. Tempor ipsum anim laboris consectetur veniam ullamco labore culpa enim laborum. Duis incididunt in dolor enim. Cillum tempor incididunt nostrud nulla Lorem aliquip.\r\n",
                      time: "23/05/2019 06:57:50",
                      author: "sending"
                    },
                    {
                      message: "Et sint ipsum non irure anim. Tempor magna amet laboris Lorem laborum excepteur cillum voluptate commodo aliqua incididunt. Aliqua culpa labore ipsum cillum anim. Aute labore sint aliqua proident. Do consequat esse fugiat magna est duis sint occaecat non qui id id laboris nostrud. Eiusmod dolore minim laborum ullamco sunt est esse aliqua fugiat cillum sunt mollit elit. Amet ipsum dolor adipisicing ullamco in officia duis dolore occaecat veniam aute eiusmod eiusmod reprehenderit.\r\n",
                      time: "26/09/2019 14:18:56",
                      author: "friend"
                    },
                    {
                      message: "Consectetur magna elit officia commodo aliquip dolor. Esse Lorem adipisicing amet anim qui ad. Incididunt voluptate qui officia culpa pariatur. Nostrud aliqua proident exercitation ex eu proident anim nostrud duis irure. Ut consectetur cupidatat culpa proident excepteur commodo non aliqua. Dolor et consequat dolore enim fugiat amet laborum consectetur consequat irure. Voluptate dolore laborum enim nisi do amet ad ipsum pariatur cupidatat nisi dolor anim.\r\n",
                      time: "01/08/2020 22:22:50",
                      author: "friend"
                    },
                    {
                      message: "Deserunt deserunt aliquip elit sint occaecat exercitation labore nostrud. Nulla Lorem consequat ipsum ipsum qui id anim cupidatat fugiat irure officia. Reprehenderit proident velit qui aliqua consectetur eu tempor irure mollit quis sit aliqua nulla. Sunt adipisicing culpa consequat officia voluptate excepteur eu. Ex commodo minim irure non cillum. Commodo ad est amet amet incididunt qui veniam magna est sit do. Consequat dolore exercitation qui eu minim reprehenderit ullamco laboris voluptate anim.\r\n",
                      time: "04/01/2020 23:55:14",
                      author: "sending"
                    },
                    {
                      message: "Sunt deserunt excepteur voluptate amet proident sit consectetur deserunt enim exercitation culpa occaecat esse nostrud. Id proident in mollit nostrud culpa nulla nostrud adipisicing fugiat esse veniam labore aliqua. Proident dolore est labore aliquip mollit Lorem laborum ullamco elit magna adipisicing mollit. Incididunt Lorem ea ullamco non excepteur ea ipsum fugiat eu.\r\n",
                      time: "08/08/2019 00:57:32",
                      author: "sending"
                    },
                    {
                      message: "Ex Lorem minim duis culpa pariatur occaecat est id ea et esse dolor esse. Nostrud consequat voluptate consectetur nulla cillum et enim adipisicing qui. Anim non dolore esse deserunt eu sint ad laborum deserunt elit. Nostrud eiusmod irure est labore nostrud qui aute ex do nostrud proident cillum qui.\r\n",
                      time: "16/09/2020 19:50:25",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 7,
                  name: "Martinez Howell",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/34.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Velit non nulla ex eu ea excepteur consequat incididunt nostrud deserunt veniam qui ullamco. Ex duis reprehenderit veniam excepteur laboris laboris reprehenderit eiusmod sit elit esse est ex occaecat. Qui occaecat ipsum aliquip non cupidatat dolor ad. Pariatur Lorem sit et aliqua aliqua ea anim qui sunt.\r\n",
                      time: "05/10/2019 11:49:30",
                      author: "friend"
                    },
                    {
                      message: "Ut ut ipsum tempor pariatur veniam tempor. Aliqua officia non sunt sit excepteur ipsum dolore qui est. Ullamco aliqua ut quis sint aliquip anim aute dolor exercitation aliqua magna eu aliquip. Occaecat do sit elit anim ut nulla enim quis exercitation aute minim sunt ea. Tempor dolor laboris anim enim sunt.\r\n",
                      time: "26/09/2020 10:32:04",
                      author: "sending"
                    },
                    {
                      message: "Eiusmod ut tempor sit ullamco adipisicing esse reprehenderit minim ex ea tempor enim ad aliquip. Pariatur dolor qui aliqua proident sunt cupidatat qui eiusmod consequat cillum adipisicing commodo. Qui aute officia dolore ullamco reprehenderit esse enim aliqua velit labore exercitation id elit. Anim tempor sunt aliqua aliqua ea.\r\n",
                      time: "05/12/2019 05:38:54",
                      author: "friend"
                    },
                    {
                      message: "Ad aliqua sint excepteur irure. In enim sunt elit labore ut sint laborum minim nisi eiusmod mollit nisi proident tempor. Et occaecat sit esse culpa commodo fugiat consequat in exercitation ut et ex qui qui. Sunt cillum irure irure dolor laboris dolore non. Irure consectetur mollit tempor adipisicing irure nostrud. Dolore anim id voluptate non veniam irure laborum tempor sit proident aliqua.\r\n",
                      time: "03/04/2020 21:12:57",
                      author: "sending"
                    },
                    {
                      message: "Ad ea veniam et incididunt duis et mollit commodo tempor dolor magna. Do cupidatat sit enim cupidatat. Id excepteur officia deserunt commodo excepteur est consectetur laboris.\r\n",
                      time: "31/05/2019 10:09:46",
                      author: "friend"
                    },
                    {
                      message: "Velit id aliquip consectetur laborum quis elit. Non cillum nostrud irure aliquip ullamco nisi deserunt enim cupidatat fugiat qui fugiat aliqua. Nisi fugiat et minim aliquip dolor officia amet incididunt non officia culpa duis magna. Elit proident consequat nostrud nostrud exercitation et cupidatat est eu laboris. Ea eiusmod duis esse Lorem.\r\n",
                      time: "12/01/2020 21:35:32",
                      author: "sending"
                    },
                    {
                      message: "Lorem dolor esse ut nisi pariatur consectetur esse adipisicing elit est voluptate deserunt incididunt eu. Pariatur voluptate ex et nisi consequat. Excepteur irure velit dolor qui.\r\n",
                      time: "20/03/2019 08:45:22",
                      author: "friend"
                    },
                    {
                      message: "Ex mollit ut pariatur irure magna consequat nulla reprehenderit. Nisi qui aliquip velit reprehenderit pariatur nulla proident fugiat. Sint magna do pariatur fugiat nulla ex quis ut non incididunt sint non fugiat.\r\n",
                      time: "10/07/2020 22:53:14",
                      author: "friend"
                    },
                    {
                      message: "Aliquip nisi irure et duis pariatur ipsum aute qui laborum consectetur sint aliquip. Aute nisi dolor commodo amet ad deserunt aute ipsum amet ad consequat reprehenderit aliquip. Deserunt ad ex proident qui enim enim amet occaecat voluptate qui. Aliquip dolore deserunt ipsum Lorem laboris velit officia aute commodo enim ea veniam ad cillum. Reprehenderit laboris tempor consectetur eiusmod incididunt consectetur consectetur velit minim id qui aute. Mollit reprehenderit anim nisi magna mollit dolor cillum esse ad incididunt est.\r\n",
                      time: "04/03/2020 21:31:15",
                      author: "friend"
                    },
                    {
                      message: "Ullamco culpa fugiat irure irure consequat nostrud ea amet ex irure. Exercitation consequat exercitation ea commodo ut culpa proident proident Lorem ipsum consectetur anim incididunt. Deserunt aliqua dolor Lorem culpa duis veniam deserunt aliquip amet. Cupidatat Lorem pariatur laborum officia irure fugiat aliquip quis.\r\n",
                      time: "08/10/2019 16:04:15",
                      author: "friend"
                    },
                    {
                      message: "Irure dolore consequat dolore proident exercitation adipisicing nisi. Irure Lorem magna aliquip ad consequat dolor aliquip aliqua ullamco tempor cupidatat officia dolor. Sint veniam Lorem est consequat irure eiusmod elit et adipisicing sit in esse. Pariatur velit ullamco quis amet laboris fugiat aliqua veniam fugiat. Laborum aliqua quis elit aliqua fugiat minim occaecat aliqua occaecat aliqua fugiat culpa labore. Elit nisi consectetur sint amet nostrud nulla.\r\n",
                      time: "02/09/2020 07:19:53",
                      author: "sending"
                    },
                    {
                      message: "Eu cupidatat deserunt ullamco magna in ex laborum ipsum ea labore cillum cupidatat. Voluptate sit fugiat nostrud commodo magna minim incididunt aute enim incididunt tempor adipisicing eiusmod. Velit in minim aliqua sunt elit tempor laboris. Elit duis sunt anim ad aliqua irure esse eiusmod nostrud culpa do ipsum veniam. Laborum pariatur pariatur culpa eu cillum commodo eu aliquip.\r\n",
                      time: "15/06/2019 19:38:37",
                      author: "friend"
                    },
                    {
                      message: "Velit sint reprehenderit commodo mollit in. Dolore excepteur non Lorem enim exercitation ex laboris aliquip reprehenderit exercitation aute fugiat laborum consequat. Nisi et ex tempor dolore fugiat do commodo irure qui minim non.\r\n",
                      time: "14/07/2020 09:19:14",
                      author: "sending"
                    },
                    {
                      message: "Voluptate officia ipsum do anim eiusmod amet ad. Id Lorem ex ut esse dolor. Quis do laboris irure id excepteur id eu nulla dolor ea tempor qui. Dolor ipsum esse mollit exercitation.\r\n",
                      time: "22/02/2019 19:41:45",
                      author: "sending"
                    },
                    {
                      message: "Consequat elit aliquip tempor aliquip ullamco esse esse elit. Ullamco dolore nisi nostrud aliqua non quis elit labore amet duis exercitation irure. Esse consequat sunt id excepteur ea id laboris laboris labore in elit eiusmod. Dolor ullamco excepteur mollit consequat veniam duis aliqua nostrud deserunt. Culpa enim id amet laboris culpa tempor veniam occaecat velit deserunt commodo ea. Ipsum aute ipsum esse et nulla esse qui.\r\n",
                      time: "19/11/2019 05:04:34",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 8,
                  name: "Mayer Lindsay",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/60.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Mollit exercitation fugiat Lorem ut voluptate sint dolor voluptate deserunt magna. Officia incididunt fugiat quis occaecat nostrud Lorem officia irure esse. Veniam reprehenderit sit elit reprehenderit officia do enim sint eu commodo.\r\n",
                      time: "19/08/2019 07:20:11",
                      author: "friend"
                    },
                    {
                      message: "Aliquip eu dolor incididunt fugiat. Incididunt nisi excepteur nisi culpa aliquip consequat ex commodo nulla nostrud voluptate. Ut officia fugiat et aute minim sit laboris elit nisi excepteur cupidatat. Aliquip pariatur ullamco dolore sunt officia magna voluptate sit.\r\n",
                      time: "02/02/2020 02:03:19",
                      author: "friend"
                    },
                    {
                      message: "Nostrud dolore do amet id veniam laboris minim ex. Mollit dolore ullamco consectetur sit incididunt aliquip do et in aliquip. Ut officia dolore mollit consequat dolore irure. Cupidatat aliqua velit dolore cupidatat ut ad non quis incididunt qui. Qui tempor mollit cillum aliquip nostrud sint eu.\r\n",
                      time: "13/04/2020 16:33:37",
                      author: "friend"
                    },
                    {
                      message: "Ad velit Lorem amet irure. Laborum ex laboris nisi magna exercitation magna dolore eu. Consectetur esse ullamco anim officia labore. Lorem consectetur officia proident reprehenderit ullamco dolore. Dolore amet magna adipisicing nisi aute dolore eiusmod ipsum dolor aliqua ex consectetur reprehenderit ea.\r\n",
                      time: "08/02/2020 16:07:23",
                      author: "friend"
                    },
                    {
                      message: "Lorem voluptate mollit voluptate irure qui voluptate ea ullamco duis mollit mollit eu id. Quis commodo incididunt do pariatur esse aute adipisicing dolor consequat fugiat. Dolor ullamco aliquip laboris velit do exercitation eu. Officia ad nulla est quis mollit elit excepteur id.\r\n",
                      time: "15/10/2019 16:03:33",
                      author: "sending"
                    },
                    {
                      message: "Labore laboris ipsum fugiat proident occaecat dolore sit nisi laboris fugiat sit. Elit irure est culpa voluptate aute aute ad commodo pariatur id labore id voluptate. Nostrud minim exercitation ullamco consequat tempor excepteur ad dolore proident velit esse quis sunt. Eu exercitation sit aute nisi dolor laboris nostrud excepteur. Veniam irure nulla dolore occaecat. Eiusmod elit ex sunt sunt.\r\n",
                      time: "25/03/2020 13:52:54",
                      author: "sending"
                    },
                    {
                      message: "Mollit elit mollit et quis est ullamco id voluptate tempor proident duis sit elit. Exercitation sit dolor sint sint. Ad officia labore reprehenderit non ad sit duis et irure irure. Dolor aliqua nulla ad pariatur sunt magna. Qui elit aliquip id ipsum consequat in eu sunt sunt elit. Velit ut velit aliqua in cillum eiusmod laboris et quis labore commodo.\r\n",
                      time: "06/03/2020 21:18:52",
                      author: "sending"
                    },
                    {
                      message: "Et ad fugiat esse proident anim nostrud do excepteur. Aliquip ullamco officia sint anim veniam nisi in excepteur elit voluptate Lorem. Officia labore eu sunt anim elit ad ullamco ipsum. Consequat do velit qui qui excepteur incididunt excepteur incididunt officia Lorem ullamco enim. Aliquip dolor amet do cupidatat exercitation labore consequat anim Lorem non dolor amet voluptate.\r\n",
                      time: "29/08/2020 18:42:52",
                      author: "friend"
                    },
                    {
                      message: "Aute exercitation officia ut aute minim amet consequat. Officia ea enim aliquip anim ullamco exercitation veniam velit eu anim. Voluptate laboris velit in fugiat veniam ipsum excepteur irure. Qui commodo reprehenderit dolore sit eiusmod id id anim eu nulla do quis. Reprehenderit cillum sit voluptate et exercitation. Do elit consectetur est consectetur quis voluptate irure mollit excepteur sunt fugiat officia. Quis do deserunt eiusmod amet sit id cupidatat esse Lorem deserunt elit aute.\r\n",
                      time: "13/08/2019 22:36:34",
                      author: "friend"
                    },
                    {
                      message: "Qui consectetur officia exercitation sint veniam aliqua culpa irure est fugiat. Reprehenderit labore cillum consequat elit. Exercitation exercitation elit ex ullamco dolore eu est ipsum. Ea nulla laboris sint Lorem magna sit duis. Anim sint dolor laborum reprehenderit magna enim veniam est in.\r\n",
                      time: "05/08/2019 01:35:37",
                      author: "sending"
                    },
                    {
                      message: "Officia consectetur velit aute officia occaecat aliqua anim exercitation nostrud dolore et occaecat ea adipisicing. Ea fugiat in proident esse Lorem in adipisicing id aute. Exercitation non excepteur do ipsum. Dolor excepteur est in in proident excepteur ad esse cillum labore aliquip tempor nostrud.\r\n",
                      time: "08/02/2020 11:01:04",
                      author: "sending"
                    },
                    {
                      message: "Ex id amet occaecat consequat incididunt aliqua nisi fugiat mollit. Duis laborum magna esse pariatur culpa adipisicing sit. Anim minim sit ut adipisicing labore in ut ullamco in aliquip incididunt velit irure. Ea sunt quis incididunt ea aliquip aliquip elit nostrud in. Laborum velit cupidatat nulla aliquip Lorem mollit.\r\n",
                      time: "29/09/2020 12:10:05",
                      author: "sending"
                    },
                    {
                      message: "Ut ipsum nostrud adipisicing pariatur quis ut ex ea. Laboris Lorem ea ad velit nostrud ad ut. Nisi ipsum tempor officia et qui enim sunt mollit dolor commodo qui consectetur veniam. Enim incididunt nostrud commodo laboris. Commodo nisi nisi ex est reprehenderit exercitation culpa aute adipisicing sint. Duis occaecat officia aliqua officia commodo aliquip et ex. Deserunt officia anim do voluptate nisi irure reprehenderit consequat sunt adipisicing deserunt elit.\r\n",
                      time: "31/08/2019 08:10:53",
                      author: "sending"
                    },
                    {
                      message: "Nisi fugiat culpa magna ex culpa nulla minim duis. Ut do laborum labore enim adipisicing. Incididunt quis elit mollit ullamco reprehenderit ea id duis ex ea labore amet. Laboris do id Lorem sit fugiat non. Dolore ea laboris commodo laboris. Occaecat reprehenderit quis pariatur adipisicing ex est enim ea mollit. Lorem do labore nostrud mollit sunt magna in nulla mollit eu aliqua dolore.\r\n",
                      time: "22/07/2020 16:38:24",
                      author: "sending"
                    },
                    {
                      message: "Eiusmod consequat voluptate excepteur aliqua. Nisi dolor veniam qui quis amet minim minim et. Ex aliqua minim in in nostrud ut consectetur cillum aute Lorem ullamco do. Velit ipsum cillum officia et quis dolor Lorem voluptate sint adipisicing proident Lorem. Anim dolore proident labore nostrud tempor reprehenderit nostrud ex.\r\n",
                      time: "30/08/2019 06:28:33",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod nisi duis qui qui sunt ipsum est ex officia veniam occaecat duis. Magna enim enim voluptate ullamco eu quis culpa mollit id eiusmod aliquip. Reprehenderit reprehenderit consequat id commodo quis qui ullamco minim proident.\r\n",
                      time: "03/09/2019 17:24:09",
                      author: "sending"
                    },
                    {
                      message: "Consequat esse sunt dolore cupidatat proident proident in aliqua cillum. Mollit ea sint ad sint. Esse duis veniam laboris qui dolore ut minim dolor pariatur. Sunt nisi commodo duis magna cupidatat do incididunt ut labore consequat. Ea ad consequat aliquip aliquip velit amet dolore incididunt in duis sint exercitation fugiat.\r\n",
                      time: "10/02/2020 02:13:48",
                      author: "friend"
                    },
                    {
                      message: "Elit Lorem dolor laboris irure sit nisi esse id duis in labore. Officia exercitation ut consectetur elit pariatur eiusmod in nisi incididunt veniam non fugiat nostrud anim. Quis laborum amet voluptate est quis.\r\n",
                      time: "17/03/2019 12:05:38",
                      author: "friend"
                    },
                    {
                      message: "Sint non magna sunt aliqua adipisicing nisi id. Laborum fugiat officia Lorem sit velit velit ad dolor commodo ex ullamco consequat. Ad ex duis Lorem cillum anim occaecat enim velit deserunt dolor magna irure. Elit cillum fugiat sint pariatur amet ex voluptate labore.\r\n",
                      time: "01/07/2020 11:08:18",
                      author: "friend"
                    },
                    {
                      message: "Duis nostrud laborum eiusmod minim laborum commodo commodo enim et exercitation fugiat. Cupidatat cupidatat pariatur quis amet in eu ullamco esse et irure eiusmod nostrud sint. Laboris qui labore voluptate dolore eu velit duis in pariatur veniam commodo proident aute. Mollit in Lorem exercitation eiusmod aliqua deserunt esse deserunt in. Consectetur labore dolore sit ad. Culpa cupidatat ex dolore ullamco eu dolore aliqua id aliquip ullamco.\r\n",
                      time: "15/02/2019 18:47:21",
                      author: "sending"
                    }
                  ]
                },
                {
                  id: 9,
                  name: "Horne Riggs",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/29.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Adipisicing do in sit magna incididunt minim. Lorem elit officia qui qui occaecat fugiat labore sit incididunt veniam. Ipsum culpa do id do et officia dolore laborum et exercitation occaecat non esse consectetur.\r\n",
                      time: "03/05/2020 02:49:54",
                      author: "friend"
                    },
                    {
                      message: "Nostrud voluptate amet sint dolore. Culpa nisi ad ea aliquip deserunt non consectetur id enim magna amet. Occaecat id culpa nostrud nostrud laborum irure.\r\n",
                      time: "08/11/2019 06:50:07",
                      author: "friend"
                    },
                    {
                      message: "Aliqua voluptate quis tempor dolor excepteur nulla minim. Labore voluptate dolore incididunt ex exercitation exercitation duis consectetur et tempor dolore dolore. Deserunt ullamco aliquip cillum incididunt aliquip ut cupidatat. Aute magna aute est nostrud. Sint excepteur sint labore cupidatat.\r\n",
                      time: "26/02/2019 02:11:26",
                      author: "friend"
                    },
                    {
                      message: "Duis ad velit exercitation ipsum dolor sit irure amet consectetur nisi. Ad esse fugiat officia id elit laborum id non veniam cillum. Eiusmod ex magna nostrud fugiat excepteur ut aliqua. Voluptate non pariatur reprehenderit est consequat duis proident est id eiusmod ut est officia eu. Eiusmod Lorem consectetur voluptate ullamco ullamco. Nisi magna magna occaecat et nisi irure est cupidatat reprehenderit mollit sunt minim veniam. Amet nisi quis consectetur incididunt cillum officia aute incididunt ex do duis reprehenderit ad.\r\n",
                      time: "20/06/2019 12:21:38",
                      author: "friend"
                    },
                    {
                      message: "Eu velit minim et occaecat minim pariatur consequat commodo magna laborum mollit laborum laboris. Sint do nisi occaecat exercitation magna anim ea deserunt. Aliquip et sunt ipsum occaecat anim ex ad nisi do eu cillum eu. Occaecat est occaecat Lorem ipsum tempor irure quis quis ex ex proident aute aliquip.\r\n",
                      time: "15/02/2020 20:44:15",
                      author: "sending"
                    },
                    {
                      message: "Qui reprehenderit labore laborum elit ea anim incididunt proident exercitation velit Lorem est laborum labore. Eu minim qui duis aliqua consequat cillum irure ullamco id adipisicing eu. Minim sit ad qui laboris proident aliqua ea officia adipisicing ad. Consectetur pariatur proident dolore culpa veniam ipsum occaecat. Ea voluptate nisi quis sit cillum deserunt voluptate esse quis dolore aliquip veniam.\r\n",
                      time: "02/03/2019 21:45:32",
                      author: "sending"
                    },
                    {
                      message: "Consequat amet officia ad pariatur. Dolor pariatur adipisicing enim amet enim cillum non. Deserunt ut ex aliquip anim occaecat aliqua culpa id cillum minim eu. Adipisicing duis laborum fugiat proident non in. In mollit duis ad culpa qui. Sint in et occaecat commodo voluptate in dolore fugiat. Minim anim eiusmod in laborum ex sint in dolore.\r\n",
                      time: "06/10/2019 21:20:17",
                      author: "sending"
                    },
                    {
                      message: "Ea nisi occaecat adipisicing veniam reprehenderit anim qui irure culpa consectetur consectetur commodo laborum do. Dolor labore aute quis cillum anim labore consequat pariatur labore. In velit Lorem ullamco sint aute. Non ad ipsum ad in.\r\n",
                      time: "24/06/2019 17:51:35",
                      author: "sending"
                    },
                    {
                      message: "Ex ex dolor esse excepteur aute commodo aliqua ut minim. Eiusmod ut cillum in laboris laboris duis. Officia Lorem consectetur ipsum cupidatat excepteur Lorem occaecat et ut pariatur duis excepteur. Mollit ut eiusmod do eu laborum Lorem nisi ea eu cillum ut ullamco sunt. Do sint velit nulla et mollit culpa ea commodo.\r\n",
                      time: "14/08/2019 06:28:44",
                      author: "sending"
                    },
                    {
                      message: "Non commodo irure ea aute sint cillum cillum aute exercitation ea deserunt minim. Dolore consequat excepteur irure mollit sint exercitation sint elit aliqua fugiat aute dolor voluptate. Mollit nostrud duis incididunt do consequat quis exercitation magna duis. Ad magna ad aute non nisi cupidatat anim Lorem. Culpa adipisicing laboris tempor do reprehenderit magna sunt Lorem consectetur sunt enim non.\r\n",
                      time: "26/02/2019 11:20:04",
                      author: "sending"
                    },
                    {
                      message: "Exercitation sint esse est fugiat anim pariatur incididunt. Dolore pariatur reprehenderit nisi irure quis quis Lorem ex voluptate mollit sit. Anim cillum laborum eiusmod consectetur. Dolor irure et cupidatat culpa dolor proident ad ut magna tempor duis veniam eiusmod. Eiusmod laboris eu minim exercitation elit anim elit officia. Consequat incididunt excepteur esse nulla mollit do amet.\r\n",
                      time: "26/06/2019 13:39:53",
                      author: "friend"
                    },
                    {
                      message: "Ea excepteur laboris cillum laborum dolore reprehenderit proident labore fugiat. Qui voluptate exercitation cillum quis qui cupidatat. Officia dolore sunt anim non commodo.\r\n",
                      time: "24/09/2019 19:39:19",
                      author: "sending"
                    },
                    {
                      message: "Dolore nisi culpa cupidatat occaecat pariatur qui non do consectetur eiusmod eu anim mollit cillum. Minim elit Lorem anim elit tempor reprehenderit in et culpa excepteur sunt exercitation ullamco. Amet deserunt irure anim mollit culpa anim ea consectetur do nostrud deserunt. Id ea in ad veniam voluptate Lorem sit qui elit ex dolor.\r\n",
                      time: "04/05/2020 02:56:28",
                      author: "sending"
                    },
                    {
                      message: "Commodo ut cillum non veniam. Ut esse tempor amet occaecat tempor. Adipisicing ea culpa laboris fugiat nisi pariatur magna ea aliquip aliquip officia Lorem nostrud eiusmod. Est fugiat est commodo sit cillum aliquip consequat culpa cupidatat elit excepteur. Sit quis non minim nostrud minim aliquip quis eu consectetur ad dolore. Qui dolor veniam ea ullamco dolore eiusmod deserunt incididunt ea cillum ea. Cillum laborum aliqua tempor tempor.\r\n",
                      time: "13/04/2020 16:58:18",
                      author: "sending"
                    },
                    {
                      message: "Minim aliqua id consequat consequat officia. Commodo tempor eiusmod laborum aliquip et minim in esse est. Non ad velit veniam aute enim qui incididunt. Sit Lorem quis sit incididunt eu commodo elit commodo sint non exercitation quis. Do consectetur Lorem sunt in do laborum non. Esse laborum ad commodo enim labore. Excepteur non cillum consequat commodo occaecat irure.\r\n",
                      time: "04/06/2020 20:35:43",
                      author: "sending"
                    },
                    {
                      message: "Adipisicing duis laboris cillum consectetur elit qui elit est voluptate. Est non fugiat nulla irure ad cillum enim exercitation do. Duis anim ipsum dolore sint elit consectetur sunt qui enim reprehenderit. Laboris excepteur veniam pariatur exercitation.\r\n",
                      time: "18/08/2019 22:59:44",
                      author: "friend"
                    },
                    {
                      message: "Enim enim ullamco commodo do. Nisi cillum elit et laborum pariatur labore consectetur ipsum. Sit mollit consequat aliqua velit voluptate deserunt. Do ad cillum est ad cupidatat. Nostrud culpa mollit exercitation ad excepteur incididunt anim. Pariatur sint culpa Lorem laboris amet culpa. Irure eu consequat pariatur voluptate proident.\r\n",
                      time: "21/09/2020 12:05:16",
                      author: "sending"
                    },
                    {
                      message: "Nostrud ut nulla quis duis nostrud. Proident voluptate veniam ad cillum eu est cupidatat. Exercitation culpa cupidatat Lorem id incididunt incididunt excepteur officia magna. Ea deserunt aliqua aliqua fugiat cupidatat ullamco ipsum ea irure.\r\n",
                      time: "18/05/2019 06:33:25",
                      author: "sending"
                    },
                    {
                      message: "Qui sunt ea magna laborum. Ipsum elit eu Lorem cupidatat eu id. Reprehenderit reprehenderit duis nostrud laborum minim consequat amet occaecat. Lorem do voluptate occaecat nisi. Quis elit laboris ullamco ut eiusmod excepteur.\r\n",
                      time: "16/03/2019 04:09:49",
                      author: "friend"
                    },
                    {
                      message: "Amet cillum eiusmod labore anim et Lorem cillum velit deserunt exercitation tempor. Ut ut sint aliquip laborum et enim irure nulla ipsum sint duis. Magna proident excepteur fugiat ea culpa proident. Mollit non consectetur sit est nisi. Adipisicing est enim ad sunt do culpa id fugiat ut proident cupidatat cillum pariatur veniam. Mollit dolore labore esse excepteur dolore qui voluptate quis sint nulla ipsum cillum labore. Voluptate Lorem Lorem et aliquip laborum sint do.\r\n",
                      time: "11/08/2019 21:05:18",
                      author: "friend"
                    },
                    {
                      message: "Laborum fugiat pariatur do aliquip dolor. Laboris fugiat id ullamco nulla ad sit. Consectetur anim eiusmod deserunt mollit dolore laboris exercitation sunt.\r\n",
                      time: "01/08/2020 19:50:45",
                      author: "friend"
                    },
                    {
                      message: "Sint deserunt culpa magna do fugiat ad aliquip eiusmod ipsum dolor aute. Nisi sit ad exercitation adipisicing do sint amet. Incididunt esse mollit voluptate enim ipsum amet deserunt ullamco aliquip. Ipsum esse duis non aliqua deserunt amet ut labore ut reprehenderit ut proident ex officia. Aliqua occaecat exercitation elit non sint. Ut adipisicing consectetur non incididunt aliqua cillum eu nostrud dolore commodo excepteur voluptate.\r\n",
                      time: "19/06/2019 17:53:25",
                      author: "friend"
                    },
                    {
                      message: "Qui adipisicing est reprehenderit dolore sit laborum pariatur duis proident. Sit laborum deserunt qui ut laboris aliquip ex ex. Adipisicing aliquip cillum sit proident amet aliquip ad consectetur in aliqua. Proident labore veniam proident id duis elit labore ea proident. Qui ex sunt dolor labore commodo fugiat nulla duis exercitation Lorem et sint amet nisi.\r\n",
                      time: "16/10/2019 22:12:14",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit duis enim culpa exercitation qui est id pariatur. Sint nostrud ut cupidatat magna aute eiusmod esse laboris. Ut anim est eiusmod esse Lorem nulla elit in eiusmod proident. Minim amet non id cupidatat sunt ullamco excepteur nulla.\r\n",
                      time: "23/07/2020 09:31:16",
                      author: "sending"
                    },
                    {
                      message: "Ea adipisicing magna sunt officia anim adipisicing cupidatat sint. Exercitation anim elit veniam voluptate non consectetur commodo reprehenderit amet id labore non. Quis sit proident aliquip et do veniam officia ex qui exercitation officia sunt. Elit fugiat velit sint sit fugiat cillum consequat ipsum dolore ipsum consequat ex.\r\n",
                      time: "07/02/2019 05:02:45",
                      author: "friend"
                    },
                    {
                      message: "Tempor do aute est nisi ipsum adipisicing aliquip irure nisi aliqua nostrud Lorem anim. Et est ex amet reprehenderit incididunt consectetur anim in officia anim nisi voluptate fugiat laboris. Est id aliquip adipisicing Lorem duis mollit aliquip id. Pariatur deserunt nulla veniam elit eu labore magna ad aute consequat laborum amet aute. Eu magna ullamco anim dolor.\r\n",
                      time: "26/04/2019 04:03:37",
                      author: "friend"
                    },
                    {
                      message: "Anim esse reprehenderit veniam sunt eu id. Lorem dolore eiusmod qui mollit ad dolore. Excepteur commodo mollit cupidatat esse tempor. Sint nisi est esse irure cillum. Eiusmod dolore qui deserunt mollit esse est.\r\n",
                      time: "25/01/2020 03:03:27",
                      author: "sending"
                    },
                    {
                      message: "Culpa sunt elit culpa ad eu ullamco aute in commodo magna adipisicing. Nulla nulla laborum culpa minim proident minim. Occaecat id eu incididunt anim velit elit. Nulla ea est ut enim id exercitation esse esse.\r\n",
                      time: "03/05/2019 15:23:46",
                      author: "sending"
                    },
                    {
                      message: "Eu aute et exercitation commodo. Ad tempor voluptate nulla amet eu do consequat consequat eiusmod velit enim do est consequat. Do veniam nisi adipisicing dolore sit sunt culpa aliquip ex et. Qui minim pariatur ex nisi enim incididunt ullamco est aute. Ullamco mollit cupidatat velit ut deserunt laboris excepteur laboris Lorem ullamco. In ad non deserunt exercitation sit velit dolor consectetur pariatur veniam sint.\r\n",
                      time: "15/06/2020 06:20:34",
                      author: "sending"
                    },
                    {
                      message: "Ut veniam pariatur velit sint incididunt id. Anim ad sint do commodo. Ea ut labore cupidatat exercitation cupidatat. Consequat et cillum laborum consectetur.\r\n",
                      time: "25/03/2020 21:46:59",
                      author: "sending"
                    },
                    {
                      message: "Nisi officia nisi reprehenderit excepteur velit sunt occaecat. Id eu velit elit amet cupidatat dolor ullamco dolor excepteur est id officia elit tempor. Incididunt magna ut proident veniam enim aliquip adipisicing velit enim irure qui anim. Reprehenderit ea veniam cillum Lorem laborum sint quis non qui enim ullamco do.\r\n",
                      time: "21/09/2020 06:30:13",
                      author: "friend"
                    },
                    {
                      message: "Lorem cillum duis sunt tempor exercitation deserunt sunt id ipsum ex pariatur ut. Reprehenderit aute veniam exercitation aliquip minim adipisicing sit. Ut sit adipisicing elit nostrud. Nulla amet in anim eiusmod in irure sit esse consectetur labore Lorem nostrud. Cillum reprehenderit et reprehenderit sunt cupidatat minim laboris veniam velit ipsum commodo. Et consequat culpa ipsum eiusmod sit.\r\n",
                      time: "25/08/2020 01:51:51",
                      author: "friend"
                    },
                    {
                      message: "Dolor esse ad in ex sunt amet. In tempor eiusmod deserunt qui Lorem esse commodo qui in officia. Enim magna sit enim esse sunt velit dolor do mollit anim quis. Aute aute fugiat velit eu laboris eiusmod pariatur enim aliqua est sunt et tempor. Officia do qui Lorem consectetur excepteur magna. Magna ex ex ullamco ea officia. Dolor duis laboris ut eiusmod.\r\n",
                      time: "18/07/2019 13:45:38",
                      author: "friend"
                    },
                    {
                      message: "Non tempor sint veniam sit consequat aute anim. Dolor adipisicing enim esse occaecat cupidatat velit voluptate ut consequat. Mollit consequat quis fugiat ipsum nulla magna consectetur nisi.\r\n",
                      time: "30/09/2020 08:35:20",
                      author: "sending"
                    },
                    {
                      message: "Culpa tempor elit ut ut aliquip culpa veniam esse commodo deserunt tempor mollit esse veniam. Eiusmod consectetur deserunt cupidatat esse eiusmod. Ut deserunt ullamco ipsum fugiat aliquip elit dolore. Reprehenderit consectetur amet eu excepteur id proident reprehenderit do ut nostrud do mollit magna. Fugiat pariatur ullamco eiusmod nisi et ullamco Lorem sint cillum irure ad eiusmod elit. Duis mollit et irure magna non non excepteur consectetur in est dolor consequat. Anim deserunt velit cillum et sint.\r\n",
                      time: "27/03/2020 10:44:52",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 10,
                  name: "Greta Sandoval",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/26.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Cupidatat reprehenderit cillum in ex est mollit. Consequat id id cupidatat ut est tempor elit non. Duis cupidatat nisi cupidatat in velit. Nostrud anim cillum et quis cupidatat ullamco duis incididunt velit adipisicing dolore proident. Irure velit commodo amet ex ex ullamco eu nisi sit tempor id anim commodo. Sunt excepteur sit nostrud mollit. Velit sint mollit eiusmod sunt incididunt ullamco Lorem duis minim adipisicing reprehenderit.\r\n",
                      time: "26/01/2020 19:01:18",
                      author: "friend"
                    },
                    {
                      message: "Velit aute ipsum ad ullamco. Qui consequat fugiat aute ut reprehenderit ex fugiat proident. Quis nostrud occaecat ipsum fugiat consectetur id aliqua cillum eu ex tempor nulla cupidatat culpa. Duis commodo enim nisi irure nisi duis aute exercitation dolor ad. Laborum ipsum cupidatat aliquip culpa et aliquip sit. Sunt ex sunt sit ullamco sunt adipisicing pariatur id pariatur. Irure deserunt pariatur eiusmod occaecat laboris pariatur eu eu irure duis sunt.\r\n",
                      time: "29/05/2020 17:37:33",
                      author: "friend"
                    },
                    {
                      message: "Qui do labore amet incididunt. Ad nisi ad ullamco laboris excepteur exercitation Lorem. Quis tempor mollit anim non id. Et occaecat laborum ipsum officia id aliqua. Ea dolore est voluptate reprehenderit officia nisi adipisicing officia magna. Non cillum ullamco est ut magna irure.\r\n",
                      time: "21/04/2019 00:38:36",
                      author: "friend"
                    },
                    {
                      message: "Anim consequat anim ullamco tempor nulla ipsum. Ea Lorem est est excepteur officia ipsum. Eu veniam minim eu sint tempor excepteur sint commodo voluptate officia sit enim. In commodo non laborum eiusmod Lorem occaecat Lorem.\r\n",
                      time: "13/09/2020 04:40:45",
                      author: "sending"
                    },
                    {
                      message: "Et aliqua proident duis consectetur ipsum. Fugiat laboris aliqua adipisicing cillum dolore. Nulla occaecat eiusmod excepteur sunt voluptate ex veniam ea. Voluptate eu quis commodo magna sint enim ea anim consequat adipisicing. Irure ut laboris eiusmod amet.\r\n",
                      time: "19/05/2019 01:58:03",
                      author: "friend"
                    },
                    {
                      message: "Ullamco do amet amet reprehenderit culpa incididunt ipsum aute dolore laboris sint nostrud. Tempor aliquip pariatur anim nisi. Enim sint veniam excepteur proident consectetur elit esse et ullamco do non eiusmod aliqua aliqua.\r\n",
                      time: "16/03/2020 12:41:32",
                      author: "friend"
                    },
                    {
                      message: "Mollit ipsum dolore laborum fugiat ut. Quis incididunt veniam consectetur quis exercitation nulla Lorem officia. Esse tempor reprehenderit Lorem ad sunt id deserunt est Lorem laboris.\r\n",
                      time: "24/03/2019 16:59:22",
                      author: "friend"
                    },
                    {
                      message: "Ullamco labore occaecat culpa nostrud cillum occaecat enim voluptate voluptate culpa dolor. Labore labore in minim et sunt consequat consequat eu quis aliquip mollit veniam. Pariatur laborum non aliquip occaecat nulla cillum consectetur amet exercitation pariatur proident dolor Lorem. Dolore fugiat eu eu fugiat magna nulla. Occaecat deserunt occaecat nisi proident labore aliquip incididunt et anim. Sint qui minim reprehenderit do dolore aliquip elit incididunt esse ut ullamco. Enim consequat est occaecat minim pariatur.\r\n",
                      time: "03/08/2020 12:36:43",
                      author: "friend"
                    },
                    {
                      message: "Nulla dolore dolore culpa aute nulla do exercitation sunt occaecat ipsum incididunt. Duis esse quis aute nulla enim. Laboris ad sunt minim do exercitation id minim. Exercitation velit non labore minim. Tempor cupidatat ad magna ullamco proident. Pariatur magna velit enim dolore quis laborum nostrud elit officia ea dolor exercitation non magna.\r\n",
                      time: "09/12/2019 10:51:53",
                      author: "friend"
                    },
                    {
                      message: "Fugiat dolor irure in Lorem consequat. Sint eu fugiat ullamco ipsum laborum consequat cupidatat. Veniam commodo pariatur dolor dolore laborum ullamco sit quis incididunt eu anim. Ad occaecat officia sunt consectetur nulla dolor Lorem voluptate culpa anim proident. Magna officia veniam reprehenderit deserunt consectetur ut. Labore tempor amet excepteur sint sint dolor. Ut non consectetur do anim.\r\n",
                      time: "09/05/2019 03:23:31",
                      author: "friend"
                    },
                    {
                      message: "Qui sit incididunt cupidatat ea laboris sit. Do nisi mollit laboris elit sit Lorem in anim Lorem do sit deserunt irure exercitation. Occaecat fugiat aute amet do.\r\n",
                      time: "29/04/2020 08:34:30",
                      author: "sending"
                    },
                    {
                      message: "Sint laborum labore cillum duis labore sunt fugiat labore consectetur irure enim adipisicing nisi labore. Irure fugiat sunt dolore labore Lorem commodo eiusmod velit sunt ea nisi mollit aliqua adipisicing. Dolore commodo dolor proident nostrud quis consequat. Minim ex quis ea labore est labore aliquip nulla adipisicing voluptate consequat officia cupidatat fugiat. Enim sint anim aute incididunt enim ex elit excepteur. Aute ut anim tempor ex consectetur adipisicing excepteur ex culpa aliqua labore non cillum irure. Reprehenderit commodo consequat velit cupidatat laboris.\r\n",
                      time: "04/10/2019 01:47:03",
                      author: "sending"
                    },
                    {
                      message: "Aute incididunt enim duis magna laborum est id labore. Minim ad irure elit proident pariatur consectetur ut duis aliquip cupidatat quis aliquip. Consequat excepteur exercitation sint ipsum. Nisi reprehenderit nulla et cillum labore est occaecat cillum nisi exercitation eu adipisicing.\r\n",
                      time: "06/07/2020 09:16:56",
                      author: "sending"
                    },
                    {
                      message: "Laborum sunt adipisicing tempor fugiat officia. Fugiat laborum consectetur magna in dolor mollit. Non anim minim magna in aliqua amet aliquip aute velit eu in adipisicing sunt. Velit ullamco excepteur in nostrud.\r\n",
                      time: "10/05/2020 02:42:07",
                      author: "sending"
                    },
                    {
                      message: "Id ullamco in aliqua consectetur consectetur sint excepteur. Nostrud Lorem veniam commodo nisi velit culpa sint cillum esse do aliquip ut laborum laboris. Irure occaecat deserunt eu culpa irure veniam deserunt ut anim laboris.\r\n",
                      time: "24/06/2019 08:46:32",
                      author: "friend"
                    },
                    {
                      message: "Nisi culpa quis in quis sit est ex ut cillum amet exercitation. Dolor qui ea consectetur fugiat labore. Laborum non velit eiusmod cupidatat nisi est consequat ipsum aliquip aliqua do laboris.\r\n",
                      time: "04/03/2020 15:42:38",
                      author: "sending"
                    },
                    {
                      message: "Et amet ad voluptate consectetur nostrud aliquip sunt ut nisi cillum incididunt anim. Officia non sunt labore nostrud deserunt duis nulla laborum eiusmod elit enim. Eiusmod consectetur commodo nostrud fugiat minim duis incididunt labore do est duis nostrud minim nostrud. Tempor et nulla proident sint laborum Lorem veniam quis quis eiusmod laboris. Cillum aliqua aliqua consectetur Lorem irure et cupidatat ex.\r\n",
                      time: "06/06/2019 14:49:18",
                      author: "sending"
                    },
                    {
                      message: "Laborum nostrud nisi id enim incididunt sint adipisicing sunt. Eu ipsum amet cillum dolore consequat veniam commodo minim. Exercitation aute ipsum anim laboris. Duis ad consequat anim anim esse laborum cillum reprehenderit. Tempor voluptate eu deserunt aliquip cillum enim dolor commodo officia in do aliquip exercitation.\r\n",
                      time: "19/06/2019 18:50:26",
                      author: "sending"
                    },
                    {
                      message: "Proident et aliqua aliqua dolore nostrud laboris sint nostrud ipsum amet minim cillum tempor. Dolor sit anim id magna duis veniam et amet est ut tempor cupidatat excepteur. Ipsum nisi esse dolor velit esse nostrud consectetur exercitation nostrud tempor amet officia culpa nisi. Non exercitation ex proident adipisicing ipsum ut non non ullamco amet. Amet sit cillum aliquip commodo eu enim.\r\n",
                      time: "29/08/2019 21:02:40",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit laboris occaecat tempor id voluptate qui elit in dolore culpa dolor ex consectetur. Mollit commodo reprehenderit aliqua magna est deserunt enim commodo aute deserunt. Ea excepteur sit nulla irure exercitation non laboris aute sit esse quis do sint tempor. Culpa nostrud duis aute Lorem nostrud sit ut culpa aliqua culpa consectetur id amet Lorem.\r\n",
                      time: "10/08/2019 16:28:49",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 11,
                  name: "Lolita Wolfe",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/4.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Sint nisi tempor commodo tempor exercitation officia consequat velit labore sit ullamco sunt ut duis. Proident elit nisi aliquip incididunt. Lorem non ad non do ad eu labore mollit labore reprehenderit culpa aliqua. Proident exercitation labore ea ea aliquip occaecat fugiat non sunt dolore dolor.\r\n",
                      time: "10/03/2020 09:51:17",
                      author: "sending"
                    },
                    {
                      message: "Ut tempor incididunt veniam do mollit non aute ut ipsum sit. Laborum tempor aliquip commodo qui tempor aliqua. Anim ullamco deserunt in nostrud voluptate consectetur.\r\n",
                      time: "15/07/2020 22:47:12",
                      author: "friend"
                    },
                    {
                      message: "Deserunt elit est mollit id sint laborum excepteur dolore sunt. Occaecat mollit ipsum culpa sit nostrud nulla in. Voluptate eiusmod cillum ut laboris ipsum id ipsum mollit nisi veniam. In officia velit velit ad cupidatat occaecat eu excepteur minim labore elit laboris anim proident. Deserunt reprehenderit sit ipsum ullamco velit magna magna aute ad labore.\r\n",
                      time: "14/02/2019 05:19:04",
                      author: "sending"
                    },
                    {
                      message: "Laboris est aliquip aute et sunt aute. Culpa occaecat et laboris dolore incididunt sint ullamco laborum ex cillum excepteur elit sint est. Commodo est quis enim anim laborum minim irure. Cupidatat eiusmod eiusmod laboris ea ipsum mollit adipisicing labore.\r\n",
                      time: "16/01/2020 15:26:36",
                      author: "friend"
                    },
                    {
                      message: "Deserunt laborum quis culpa reprehenderit incididunt id consectetur et excepteur aute ut duis adipisicing. Nostrud culpa ex esse proident duis sit nostrud proident sunt duis. Commodo anim ea laboris minim do qui fugiat anim ipsum. Dolore aute est ad elit pariatur id elit.\r\n",
                      time: "10/06/2019 14:59:03",
                      author: "sending"
                    },
                    {
                      message: "Velit culpa deserunt eu cillum commodo labore ullamco eiusmod dolor nostrud in consequat Lorem mollit. Officia ea nulla irure ipsum ad consequat elit consequat nulla ipsum minim voluptate consequat. Ipsum sunt ullamco est esse ut excepteur consequat eu veniam pariatur cillum ullamco sit.\r\n",
                      time: "10/01/2020 17:04:22",
                      author: "sending"
                    },
                    {
                      message: "Quis ipsum nostrud dolor esse pariatur culpa. Ut id cillum amet est consequat excepteur ea nostrud cillum laboris. Consectetur esse nisi ipsum ea ea excepteur eiusmod magna ad nostrud ea adipisicing. Incididunt duis laborum ullamco laboris velit nulla laborum ea aute pariatur nostrud incididunt aliquip. Consectetur reprehenderit laborum mollit enim qui ipsum anim voluptate ullamco ea sit non.\r\n",
                      time: "18/07/2019 21:44:31",
                      author: "sending"
                    },
                    {
                      message: "Deserunt ut minim anim veniam ea est veniam ut non laborum adipisicing enim exercitation ullamco. Deserunt consectetur quis labore irure et. Commodo sit nostrud esse anim et incididunt incididunt esse. Ad consectetur amet nostrud labore adipisicing mollit cillum nulla enim ad. Exercitation labore minim laborum irure cillum id ullamco velit excepteur laborum laboris.\r\n",
                      time: "19/06/2019 23:49:43",
                      author: "friend"
                    },
                    {
                      message: "Consequat ipsum in anim est excepteur nostrud labore aliquip. Laboris nulla incididunt non ex consequat officia. Ex excepteur ut nostrud voluptate.\r\n",
                      time: "21/12/2019 17:19:46",
                      author: "sending"
                    },
                    {
                      message: "Amet proident adipisicing irure sit elit irure aliqua consequat esse ut cillum. Aliquip consectetur duis exercitation anim deserunt ad pariatur consequat eu cillum labore. Pariatur commodo adipisicing nulla nostrud aliquip laborum et labore culpa culpa. Irure deserunt cillum ipsum deserunt. Incididunt esse proident labore Lorem nulla culpa exercitation fugiat mollit. In est irure deserunt tempor.\r\n",
                      time: "01/11/2019 14:18:17",
                      author: "friend"
                    },
                    {
                      message: "Sint Lorem aute adipisicing laboris pariatur cupidatat ex esse est commodo dolor aliqua. Reprehenderit tempor ex incididunt eiusmod consectetur non in deserunt. Commodo laborum eu cupidatat et nulla amet sunt ut qui mollit elit ut ex ea. Anim proident aute cupidatat et irure aliqua esse magna ea aliqua ex. Voluptate id esse aliqua est ea ipsum. Elit enim aliqua aliquip sunt qui velit ex eiusmod. Adipisicing est eu ullamco occaecat ipsum adipisicing occaecat labore dolor minim magna quis sunt.\r\n",
                      time: "02/07/2019 02:23:31",
                      author: "sending"
                    },
                    {
                      message: "Et pariatur aliquip sint dolore laborum nisi eu reprehenderit ea enim. Amet in et fugiat adipisicing occaecat. In aliqua aute nisi irure nulla sint fugiat nostrud ut laborum ea duis duis voluptate. Ullamco deserunt ut labore cillum culpa consequat mollit. Est culpa dolore laboris occaecat nulla dolor nisi ad cupidatat ut dolore ad. Reprehenderit eiusmod qui mollit officia.\r\n",
                      time: "10/08/2020 19:33:00",
                      author: "friend"
                    },
                    {
                      message: "Esse sunt dolore dolor ex culpa duis sunt deserunt anim. Amet quis nisi do officia reprehenderit fugiat veniam voluptate exercitation commodo nulla eu non tempor. Nulla enim mollit excepteur fugiat ut cillum ullamco ullamco aliqua est incididunt. Laboris voluptate ad nulla mollit et commodo minim. Adipisicing ex sunt in aliqua. Cupidatat irure ea dolore sunt dolore laborum consectetur. Non aliqua ullamco nisi sunt ad dolore incididunt sunt ut dolore amet.\r\n",
                      time: "06/06/2019 15:35:44",
                      author: "friend"
                    },
                    {
                      message: "Consectetur ad sint esse ad reprehenderit aliquip exercitation veniam sunt esse. Id quis cupidatat magna aliqua ipsum aliqua ipsum sunt incididunt nostrud enim minim do duis. Id ipsum Lorem excepteur esse occaecat laboris et magna eiusmod laborum velit est. Sint anim velit labore ipsum Lorem. Lorem incididunt laborum sit elit quis in. Sit reprehenderit Lorem dolore veniam amet mollit aliqua nulla adipisicing duis. Incididunt Lorem aute cillum aliqua ad et veniam proident irure velit ea quis tempor tempor.\r\n",
                      time: "09/06/2019 06:28:00",
                      author: "friend"
                    },
                    {
                      message: "Ex irure nostrud sunt occaecat quis officia. Excepteur tempor magna laboris consectetur esse sunt magna aliquip ullamco mollit reprehenderit. Id fugiat aliqua fugiat mollit culpa et.\r\n",
                      time: "07/05/2020 00:41:05",
                      author: "friend"
                    },
                    {
                      message: "Aute proident laborum officia fugiat reprehenderit minim elit voluptate cupidatat dolor aliquip ut do esse. Ex id duis occaecat cupidatat voluptate eu minim culpa dolore sit commodo. Ut anim reprehenderit cillum commodo in consectetur dolore reprehenderit. Adipisicing adipisicing dolor pariatur labore amet est quis ad laboris eu. Incididunt sunt cupidatat exercitation quis voluptate sit ex consectetur aliquip eu esse consectetur ex sit. Nisi labore consectetur proident duis eiusmod exercitation duis cupidatat exercitation tempor deserunt.\r\n",
                      time: "07/02/2020 16:42:58",
                      author: "friend"
                    },
                    {
                      message: "Eu officia sit nostrud commodo deserunt veniam ipsum proident sint laboris eu. Enim do Lorem pariatur aliquip minim quis deserunt officia commodo deserunt sint dolor. Laboris sint nostrud ipsum anim mollit officia amet eiusmod sint tempor. Culpa dolore eu nulla non enim ex amet deserunt est minim velit. Sit ea consequat proident ut quis.\r\n",
                      time: "08/03/2019 12:14:33",
                      author: "sending"
                    },
                    {
                      message: "Aliqua ipsum ex proident pariatur irure elit Lorem tempor quis. Ex ea ea nostrud exercitation minim. Ea anim est irure esse qui do duis. Minim amet culpa nostrud eiusmod laboris nostrud deserunt consequat id in deserunt ullamco qui. Ad consequat sint in do cupidatat magna aute pariatur anim nostrud sint. Quis aute qui aliquip tempor laborum do ut. Excepteur laboris exercitation mollit occaecat occaecat laborum dolor enim ex sunt aliquip reprehenderit.\r\n",
                      time: "05/02/2019 10:17:37",
                      author: "sending"
                    },
                    {
                      message: "Nostrud ex eiusmod reprehenderit proident incididunt pariatur commodo non duis. Velit esse pariatur Lorem dolor ipsum ullamco eu enim in id fugiat. Deserunt incididunt aliqua laborum ea minim sit sint ipsum. Eu labore officia quis ipsum et adipisicing amet laborum aute.\r\n",
                      time: "01/10/2019 01:47:39",
                      author: "sending"
                    },
                    {
                      message: "Mollit aliquip dolor ullamco eiusmod fugiat elit. Nostrud ad proident occaecat eiusmod id proident aute cillum cillum ut. Veniam magna nulla aliquip occaecat dolore tempor occaecat.\r\n",
                      time: "28/05/2019 10:35:38",
                      author: "friend"
                    },
                    {
                      message: "Ipsum exercitation reprehenderit in excepteur nulla cillum in incididunt mollit culpa reprehenderit. Eu laboris nisi tempor aliquip nisi dolore sint sint enim aute est nostrud in. Quis irure consequat elit excepteur minim qui nostrud exercitation quis ex ex. Consequat dolore esse cupidatat non ex. Esse mollit proident id proident.\r\n",
                      time: "29/06/2019 18:33:11",
                      author: "friend"
                    },
                    {
                      message: "Officia esse ipsum quis consectetur cupidatat. Minim deserunt fugiat aliquip ea ex est nostrud. Ad pariatur non Lorem dolore enim in nulla ad nisi aute.\r\n",
                      time: "22/04/2020 20:14:50",
                      author: "sending"
                    },
                    {
                      message: "Do veniam quis officia ut occaecat adipisicing consectetur nulla in pariatur ipsum pariatur irure. Officia culpa velit ea nisi laborum est reprehenderit duis minim Lorem. In irure anim proident veniam aliqua sit elit laboris. Ut ullamco commodo excepteur laboris deserunt eu do. Eu in cupidatat labore velit consequat cupidatat anim in sint anim do. Proident sint tempor eiusmod occaecat minim est.\r\n",
                      time: "22/11/2019 22:44:19",
                      author: "sending"
                    },
                    {
                      message: "Excepteur cillum duis eu veniam amet enim do eiusmod anim proident in. Ex in dolore quis qui voluptate mollit et do labore dolore magna dolore. Dolor ullamco ex minim voluptate ipsum exercitation tempor nostrud deserunt ut consectetur voluptate incididunt qui. Enim exercitation in reprehenderit commodo reprehenderit tempor. Proident laboris adipisicing Lorem consectetur consectetur sunt dolor reprehenderit reprehenderit.\r\n",
                      time: "04/07/2019 04:31:12",
                      author: "sending"
                    },
                    {
                      message: "Proident non irure aute cupidatat. Anim culpa aute fugiat ea reprehenderit ipsum voluptate est. Anim labore voluptate adipisicing cupidatat.\r\n",
                      time: "04/04/2020 13:27:58",
                      author: "friend"
                    },
                    {
                      message: "Dolor esse duis aliqua voluptate do nisi quis tempor. In incididunt qui enim ut id sint labore aliqua esse culpa. Dolore sint sit consequat reprehenderit proident aliqua do exercitation.\r\n",
                      time: "21/08/2019 05:40:24",
                      author: "friend"
                    },
                    {
                      message: "Sint nostrud mollit ad irure deserunt ut et magna. Sint in et consequat occaecat non do enim. Velit tempor eiusmod pariatur duis. Magna eu anim duis enim sint amet veniam ea do nulla aliquip dolor.\r\n",
                      time: "29/05/2020 20:51:13",
                      author: "friend"
                    },
                    {
                      message: "Lorem dolor anim cupidatat nisi qui ex aliquip dolor qui pariatur est amet. Proident nostrud ea sit in exercitation exercitation. In cillum irure aliqua aliquip nulla. Cillum sit ut tempor proident. Esse anim enim magna sint est officia. Tempor fugiat enim et dolore dolor sit duis velit commodo tempor esse occaecat deserunt dolor.\r\n",
                      time: "07/05/2019 06:58:56",
                      author: "sending"
                    },
                    {
                      message: "Veniam magna sunt officia est occaecat exercitation magna sint. Nostrud aliqua non consectetur anim et Lorem adipisicing quis ut reprehenderit incididunt nostrud. Sint laborum sint dolor dolore veniam dolor est.\r\n",
                      time: "16/09/2019 22:48:56",
                      author: "friend"
                    },
                    {
                      message: "Ullamco id aute mollit sit occaecat ut anim excepteur minim ut. Duis aliquip sunt tempor dolor. Amet exercitation ad veniam aliquip sint Lorem est. Amet commodo aute et quis enim. Aliqua ad culpa ipsum minim ex est. Voluptate pariatur do incididunt enim dolore eu sint irure. Ipsum laborum quis in occaecat.\r\n",
                      time: "24/04/2019 09:45:24",
                      author: "friend"
                    },
                    {
                      message: "In irure exercitation anim velit eu ad veniam sit ea. Velit elit proident dolor ipsum consectetur. Occaecat in consequat culpa duis ut consequat eiusmod est ullamco non ut id. Sint enim elit sint quis adipisicing amet sunt reprehenderit tempor ea. Labore incididunt commodo eu adipisicing consequat ut irure culpa.\r\n",
                      time: "21/06/2020 00:27:37",
                      author: "sending"
                    },
                    {
                      message: "Eiusmod ea pariatur minim officia qui dolore elit aliquip. Labore eu sunt veniam ut esse nostrud ad consequat voluptate labore id anim aliqua. Eu non sunt excepteur officia et minim.\r\n",
                      time: "04/09/2020 12:47:53",
                      author: "sending"
                    },
                    {
                      message: "Veniam consequat velit ad pariatur labore cupidatat. Laboris magna deserunt eiusmod nostrud magna pariatur magna ut cupidatat mollit nulla excepteur nisi ex. Velit ipsum ea est cillum et ad irure Lorem Lorem minim adipisicing commodo consectetur. Anim labore nulla minim aute eiusmod adipisicing velit officia.\r\n",
                      time: "13/10/2019 23:46:48",
                      author: "sending"
                    },
                    {
                      message: "Qui sint minim ullamco cillum excepteur. Cillum officia eu incididunt fugiat laborum in sint veniam aliqua mollit commodo reprehenderit amet. Est in reprehenderit ex id minim culpa deserunt est tempor occaecat nostrud.\r\n",
                      time: "23/11/2019 12:20:18",
                      author: "sending"
                    },
                    {
                      message: "Proident deserunt sit voluptate dolore et officia amet sunt enim cillum ullamco pariatur laborum. Cupidatat adipisicing adipisicing mollit irure nulla est anim occaecat eiusmod. Reprehenderit pariatur ut laboris cupidatat.\r\n",
                      time: "03/10/2019 13:04:18",
                      author: "friend"
                    },
                    {
                      message: "Aliquip aliqua velit amet exercitation eiusmod. Adipisicing pariatur anim incididunt proident veniam. Quis non consequat aliquip eu exercitation aliqua. Eiusmod aute dolor culpa proident magna proident anim.\r\n",
                      time: "20/02/2020 18:18:39",
                      author: "sending"
                    },
                    {
                      message: "Sunt velit aute minim ipsum sunt amet labore elit. Magna ex sunt minim amet est et. Excepteur ex laboris pariatur tempor do. Dolore qui nostrud consectetur in officia pariatur proident velit mollit reprehenderit consequat.\r\n",
                      time: "23/09/2020 05:45:05",
                      author: "sending"
                    },
                    {
                      message: "Duis anim adipisicing elit dolor nostrud laborum aliqua. Culpa dolor irure qui eu tempor deserunt aliquip incididunt cillum commodo qui incididunt do. Cillum exercitation eu et occaecat adipisicing ullamco eiusmod Lorem qui laboris.\r\n",
                      time: "15/06/2020 13:39:07",
                      author: "sending"
                    },
                    {
                      message: "Elit qui tempor enim deserunt. Eu veniam sit exercitation dolore dolor dolor. Nostrud incididunt veniam cillum mollit nulla incididunt nulla fugiat aliqua.\r\n",
                      time: "12/09/2020 00:15:38",
                      author: "sending"
                    },
                    {
                      message: "Non excepteur commodo mollit pariatur dolor amet esse labore commodo. Mollit enim deserunt ut do voluptate nulla mollit. Mollit proident excepteur ad qui proident sint quis consectetur nisi enim cupidatat. Velit amet laborum proident quis aute veniam ipsum adipisicing incididunt culpa culpa consectetur consequat aliqua. Incididunt nulla veniam mollit cupidatat magna incididunt voluptate nisi elit. Ex laboris non aliqua ea cillum veniam id. Aliquip sit eiusmod incididunt cupidatat.\r\n",
                      time: "28/03/2020 10:26:23",
                      author: "sending"
                    }
                  ]
                },
                {
                  id: 12,
                  name: "Armstrong Baird",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/31.png",
                  status: "Escrevendo...",
                  mensagens: [
                    {
                      message: "Anim excepteur magna minim tempor dolore cillum enim laboris aliqua cillum mollit tempor consequat deserunt. Non veniam nulla do eu minim aliqua sint labore. Nisi proident nisi consequat quis culpa commodo Lorem sunt cupidatat sint esse. Exercitation est est ex fugiat laboris.\r\n",
                      time: "04/02/2019 08:57:45",
                      author: "sending"
                    },
                    {
                      message: "Consectetur reprehenderit ex consequat et. Ullamco velit reprehenderit pariatur enim non proident est consectetur incididunt labore fugiat ad. Enim non tempor dolore non dolore anim aliqua ipsum sit dolore occaecat irure consectetur Lorem. Occaecat et duis veniam velit. Amet qui dolore voluptate est elit ut incididunt adipisicing.\r\n",
                      time: "27/02/2019 12:50:14",
                      author: "sending"
                    },
                    {
                      message: "Consectetur nisi voluptate laborum ad enim quis et consectetur ullamco dolor. Anim incididunt ex laborum id non. Culpa reprehenderit cupidatat eu ullamco deserunt dolore labore. Non labore mollit et in nisi sint commodo dolore ullamco magna mollit fugiat nisi. Dolor aute dolor id sint deserunt aliqua. Amet incididunt id in ut irure magna do. Pariatur consequat incididunt voluptate sint in nostrud est non ex nostrud esse id.\r\n",
                      time: "24/05/2019 17:15:26",
                      author: "sending"
                    },
                    {
                      message: "Do commodo minim ipsum voluptate. Laboris et laboris officia consequat excepteur consequat ullamco mollit occaecat ea sit. Consectetur dolor id veniam ea ipsum officia Lorem voluptate pariatur. Incididunt do Lorem magna laborum consectetur id cillum nostrud aute do ex dolore proident. Consequat dolor commodo et laborum eiusmod.\r\n",
                      time: "24/11/2019 13:36:08",
                      author: "friend"
                    },
                    {
                      message: "Sint Lorem quis fugiat incididunt nostrud laboris voluptate exercitation proident deserunt. Aute ullamco cillum duis nisi consequat sit veniam velit. Consequat non ea magna officia magna qui. Magna culpa consectetur aute tempor officia. Ad nostrud magna est consectetur pariatur duis esse aliqua.\r\n",
                      time: "04/07/2020 14:35:27",
                      author: "sending"
                    },
                    {
                      message: "Ipsum amet et reprehenderit aute incididunt. Elit laboris laboris in ipsum ex consectetur ea dolor do aliqua id duis aliqua. Quis quis deserunt non elit est aliquip fugiat officia occaecat dolor ea ex sit. Sunt ipsum sint Lorem ipsum eiusmod qui ad.\r\n",
                      time: "14/02/2019 04:12:36",
                      author: "sending"
                    },
                    {
                      message: "Officia deserunt cupidatat voluptate dolore nisi mollit voluptate veniam nulla tempor. Duis laborum aliqua quis officia cupidatat laboris commodo aute non voluptate et. Officia incididunt esse sit deserunt laborum magna veniam ex minim consequat excepteur consectetur in nisi. Labore ullamco in velit cupidatat consectetur anim sint culpa.\r\n",
                      time: "15/02/2019 13:13:50",
                      author: "friend"
                    },
                    {
                      message: "Exercitation eu amet mollit tempor ex. Id minim velit laborum non ipsum. Esse ea culpa deserunt qui officia culpa occaecat consequat nostrud aliqua reprehenderit. Amet nisi incididunt proident incididunt et nostrud consequat magna id dolore et. Incididunt aliqua in esse cupidatat id occaecat Lorem nostrud minim deserunt.\r\n",
                      time: "18/03/2020 08:21:47",
                      author: "sending"
                    },
                    {
                      message: "Dolor aute duis eiusmod amet sunt. Excepteur tempor cupidatat proident Lorem amet qui exercitation nisi fugiat magna pariatur. Nostrud dolor cupidatat ipsum aliqua ut duis velit ex Lorem labore nulla mollit elit. Nisi ad anim ad ad laboris. Labore laborum mollit in nisi cillum ipsum dolor reprehenderit ad deserunt eiusmod. Anim ipsum labore ullamco magna deserunt ad ea in qui.\r\n",
                      time: "19/02/2019 00:23:04",
                      author: "sending"
                    },
                    {
                      message: "Laboris dolore do culpa laborum anim irure dolor nisi laboris nostrud id commodo. Culpa sunt et duis sint quis commodo. Duis minim ipsum id cillum ea deserunt qui nisi sunt voluptate sunt ad id. Ad do minim ullamco minim aliqua pariatur tempor et reprehenderit magna cupidatat. Minim ipsum aliqua et duis nulla dolore qui sit mollit non cupidatat.\r\n",
                      time: "19/08/2020 22:59:14",
                      author: "friend"
                    },
                    {
                      message: "Labore consequat ea esse eiusmod deserunt sit culpa ipsum irure tempor aute sint amet mollit. Do cillum exercitation nulla in eiusmod consectetur aliquip ipsum commodo qui. Anim reprehenderit officia amet Lorem. Do in qui ut pariatur duis duis qui sint. Veniam do consequat ad qui id minim proident. Commodo qui sunt aliqua ullamco ipsum nostrud id dolore Lorem commodo cillum exercitation Lorem.\r\n",
                      time: "05/04/2020 06:38:33",
                      author: "friend"
                    },
                    {
                      message: "Tempor dolor et exercitation magna et id excepteur labore. Eu Lorem aliqua tempor commodo cillum. Esse ex commodo adipisicing exercitation in nulla aute incididunt elit commodo. Elit fugiat duis magna id in in sunt culpa aute. Nulla adipisicing proident labore id adipisicing laboris.\r\n",
                      time: "30/05/2019 04:43:38",
                      author: "friend"
                    },
                    {
                      message: "Ut laboris duis esse fugiat est est sint enim qui occaecat laborum velit consequat qui. Ad officia in ex officia adipisicing duis laboris enim incididunt. Esse commodo officia ullamco anim eu ad sint proident pariatur labore ipsum non aliquip et. Est enim consequat excepteur commodo laborum occaecat nulla sint ipsum nostrud magna.\r\n",
                      time: "16/10/2019 07:18:59",
                      author: "sending"
                    },
                    {
                      message: "Sit amet officia anim nulla do nostrud amet anim nulla laborum aliqua deserunt officia. Et eiusmod ea non pariatur id officia nulla aute esse officia mollit incididunt ipsum. Eiusmod et reprehenderit pariatur esse eiusmod quis. Eu adipisicing enim nisi elit reprehenderit ea ut cillum consectetur ad laborum.\r\n",
                      time: "22/10/2019 23:14:21",
                      author: "friend"
                    },
                    {
                      message: "Duis proident commodo aliqua cupidatat eiusmod qui. Eiusmod consectetur fugiat occaecat fugiat ex consequat veniam. Nostrud eiusmod in minim sint esse do consequat culpa qui officia irure cillum labore. Amet reprehenderit amet deserunt qui voluptate nisi incididunt occaecat ipsum. Sint ipsum aute elit excepteur id consectetur cupidatat officia. Elit veniam nisi mollit dolor nostrud occaecat incididunt ut proident eu velit Lorem. Sint commodo ad nulla occaecat.\r\n",
                      time: "11/05/2019 19:44:00",
                      author: "sending"
                    }
                  ]
                },
                {
                  id: 13,
                  name: "Hilda Berg",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/26.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Dolor elit incididunt qui culpa occaecat culpa veniam ipsum duis occaecat labore. Esse ipsum magna in mollit ut mollit eu elit aliqua ipsum ea. Non laboris aliqua commodo sit.\r\n",
                      time: "02/05/2020 09:24:36",
                      author: "sending"
                    },
                    {
                      message: "Adipisicing deserunt dolor non voluptate consectetur pariatur adipisicing minim esse cupidatat labore enim labore. Sint ut reprehenderit ullamco culpa Lorem pariatur nulla. Mollit ut mollit nulla cillum tempor proident. Magna cillum officia minim ullamco enim nisi commodo.\r\n",
                      time: "09/08/2019 16:55:47",
                      author: "friend"
                    },
                    {
                      message: "Laboris adipisicing dolore pariatur est nisi cupidatat enim excepteur excepteur proident veniam. Anim sint ex incididunt consectetur enim aute non ea. Proident eiusmod labore ea veniam aliqua sunt reprehenderit. Voluptate sunt dolor nisi consectetur commodo magna cupidatat labore eu.\r\n",
                      time: "25/02/2020 23:08:38",
                      author: "sending"
                    },
                    {
                      message: "Proident id reprehenderit irure labore culpa adipisicing quis labore amet. Velit minim esse enim incididunt voluptate. Laboris Lorem fugiat tempor laboris exercitation in ut culpa fugiat ea. Deserunt commodo excepteur aliquip Lorem non Lorem enim aliquip eu ipsum id reprehenderit id. Nisi tempor consectetur duis culpa dolor. Dolor culpa id laborum et irure esse non quis est amet. Lorem ad magna sint labore proident quis ullamco esse.\r\n",
                      time: "18/04/2020 07:49:22",
                      author: "friend"
                    },
                    {
                      message: "Ullamco ex esse nisi minim ut duis tempor laboris. Elit consequat exercitation voluptate deserunt cupidatat enim incididunt enim eu mollit veniam esse enim voluptate. Eiusmod cupidatat nisi pariatur duis amet ex veniam consequat veniam magna ea reprehenderit in. Incididunt nostrud ad et irure laborum sint mollit et consequat elit magna velit eu veniam. Duis sint incididunt do ad velit consequat ex fugiat. Aute non occaecat tempor laboris labore sunt ad consectetur ex exercitation minim nostrud in duis.\r\n",
                      time: "02/05/2019 19:21:42",
                      author: "friend"
                    },
                    {
                      message: "Id consectetur deserunt labore duis duis officia pariatur. Id enim ut qui laboris ex aute duis ipsum eu occaecat quis. Dolor minim minim minim minim aute laborum veniam non quis ad enim.\r\n",
                      time: "14/01/2020 00:08:13",
                      author: "sending"
                    },
                    {
                      message: "Labore exercitation sunt cillum cupidatat ut cillum deserunt dolor nisi culpa nulla. Enim incididunt anim sit aliqua et tempor officia. Esse elit laborum laboris non labore exercitation eu dolore cillum laboris culpa tempor culpa anim.\r\n",
                      time: "19/12/2019 00:07:34",
                      author: "friend"
                    },
                    {
                      message: "Deserunt consectetur do tempor enim excepteur eu occaecat consequat reprehenderit occaecat elit. Ut ullamco Lorem id eiusmod do tempor exercitation eiusmod irure ex. Fugiat nostrud sunt eu qui ad consectetur aute esse non commodo. Elit est tempor tempor incididunt amet sunt. Non dolor ex est non laborum culpa culpa. Reprehenderit consectetur tempor do aute sit cupidatat amet exercitation esse.\r\n",
                      time: "10/08/2019 23:00:13",
                      author: "friend"
                    },
                    {
                      message: "Lorem exercitation dolore anim nisi. Amet labore labore occaecat cillum irure aliqua cillum. Mollit cillum consequat fugiat elit culpa laborum. Non esse ea mollit ipsum ut est cupidatat consectetur mollit deserunt laborum proident. Eu ullamco voluptate culpa adipisicing Lorem ut Lorem officia veniam magna velit nisi qui elit. Tempor do adipisicing ullamco et proident ullamco velit. Ullamco enim incididunt consequat commodo ex nostrud veniam.\r\n",
                      time: "20/09/2019 02:08:53",
                      author: "sending"
                    },
                    {
                      message: "Reprehenderit occaecat aliquip nisi irure magna est incididunt est sit velit irure eu tempor. Sunt ea reprehenderit adipisicing occaecat irure consectetur ut sunt aliqua pariatur sunt. Cillum amet deserunt et ex est sit ut dolor ipsum proident velit tempor. Reprehenderit pariatur et labore id et. Lorem velit eu et irure irure. Velit duis culpa occaecat ipsum consectetur commodo sunt irure cupidatat. Est consequat dolor est est culpa.\r\n",
                      time: "27/02/2019 04:19:06",
                      author: "friend"
                    },
                    {
                      message: "Voluptate do consequat nostrud elit commodo ipsum dolor amet ad cupidatat cupidatat. Ad adipisicing sit culpa duis aute. Enim ea Lorem magna consequat et. Velit sit laborum aliqua dolor duis consequat ex eu minim fugiat.\r\n",
                      time: "16/07/2020 15:22:31",
                      author: "friend"
                    },
                    {
                      message: "Ea consequat nulla consectetur in non duis officia. Irure consectetur cupidatat aute proident consequat. Elit eu laboris minim tempor.\r\n",
                      time: "19/11/2019 08:27:51",
                      author: "sending"
                    },
                    {
                      message: "Laboris laboris eu velit esse adipisicing nulla aliqua enim. Dolor ad quis occaecat est tempor mollit magna minim et in ipsum enim. Esse sit qui consequat adipisicing anim. Duis Lorem aliquip Lorem esse. Veniam veniam aliqua labore occaecat aute mollit incididunt incididunt eu. Consequat non voluptate nisi aliquip. Adipisicing veniam eiusmod cillum commodo quis reprehenderit.\r\n",
                      time: "23/03/2020 00:18:56",
                      author: "sending"
                    },
                    {
                      message: "Quis voluptate et exercitation consequat pariatur nostrud ut est dolor. Laboris enim cupidatat deserunt sint irure enim in nisi consequat velit enim culpa. Consequat cupidatat reprehenderit pariatur magna consequat est nisi nisi tempor deserunt fugiat. Occaecat labore ad magna sint ad excepteur ipsum dolor proident.\r\n",
                      time: "01/05/2020 06:21:47",
                      author: "friend"
                    },
                    {
                      message: "Nostrud enim esse mollit consequat laborum culpa sint velit magna qui nostrud ad consequat. Voluptate aliquip nisi qui eiusmod. Deserunt aute irure esse id commodo proident. Irure nulla nisi et culpa aliqua. Laboris et amet cillum ea sint consequat ut duis Lorem consectetur fugiat cupidatat. Proident ipsum consequat cillum in ea aliqua incididunt exercitation cupidatat aliquip ullamco cupidatat. Ad enim nostrud elit proident nisi commodo incididunt in nulla qui cillum.\r\n",
                      time: "01/06/2019 17:58:22",
                      author: "sending"
                    },
                    {
                      message: "Laborum labore duis enim voluptate est minim do culpa do. Officia commodo labore ex amet ut Lorem duis excepteur aliquip qui et mollit quis exercitation. Officia nisi dolor enim quis laboris nostrud sit aliquip non.\r\n",
                      time: "11/09/2019 18:01:49",
                      author: "sending"
                    },
                    {
                      message: "Velit non excepteur eiusmod ullamco elit ullamco non. Labore anim consequat ex excepteur. Commodo anim pariatur sit consectetur anim elit cupidatat labore magna laboris.\r\n",
                      time: "21/10/2019 22:48:16",
                      author: "sending"
                    },
                    {
                      message: "Ipsum dolore commodo qui dolore velit duis. Cupidatat ullamco tempor et qui ut nulla magna. Reprehenderit ea aute ut nulla sunt ea laborum ad mollit laboris deserunt consequat est. Velit elit dolor laboris sit. Exercitation et in irure sunt Lorem eiusmod Lorem aliqua id ea ad do tempor mollit. Excepteur ullamco in reprehenderit eu nulla sit in id magna. Adipisicing laboris nostrud consequat proident consequat eu laboris ullamco excepteur pariatur in sunt nulla consectetur.\r\n",
                      time: "06/04/2020 17:53:41",
                      author: "sending"
                    },
                    {
                      message: "Exercitation dolor est reprehenderit velit aliquip dolor. Sunt irure eu laboris in officia. Esse do ad mollit anim occaecat enim exercitation adipisicing. Tempor duis ea ut nostrud proident veniam aute nisi id.\r\n",
                      time: "29/08/2019 14:01:43",
                      author: "sending"
                    },
                    {
                      message: "Duis officia esse culpa sunt eiusmod aliqua sunt amet ullamco ea proident sunt cillum. Aliquip tempor nulla aliquip nisi Lorem officia exercitation fugiat ullamco minim voluptate. Elit et nulla sint pariatur ex ullamco Lorem. Sint elit magna sunt incididunt sint. Id incididunt laborum ullamco in consequat proident. Eiusmod aute consectetur fugiat sunt commodo veniam ipsum veniam sint ut excepteur.\r\n",
                      time: "21/11/2019 12:33:42",
                      author: "sending"
                    },
                    {
                      message: "In exercitation esse laborum excepteur nulla aliquip. Exercitation nostrud anim mollit irure adipisicing. Duis dolore ipsum labore exercitation ullamco nisi. Occaecat amet excepteur ullamco incididunt incididunt cillum. Voluptate tempor sunt fugiat aliquip irure non culpa officia reprehenderit magna aliqua.\r\n",
                      time: "24/08/2019 15:51:40",
                      author: "sending"
                    },
                    {
                      message: "Culpa aliqua ea ipsum adipisicing labore enim nulla labore enim culpa elit pariatur. Commodo reprehenderit officia reprehenderit proident occaecat esse cupidatat est officia. Nulla Lorem laborum excepteur excepteur non aliqua. Do cupidatat non sint nulla. Consequat proident occaecat amet nostrud. Tempor commodo amet ut do duis mollit reprehenderit sit minim. Et minim irure est culpa aute labore est nisi commodo.\r\n",
                      time: "16/01/2020 04:26:15",
                      author: "sending"
                    },
                    {
                      message: "Officia nostrud tempor veniam excepteur velit irure exercitation. Ea excepteur quis velit anim dolore mollit mollit proident. Sint ad officia est non culpa deserunt velit deserunt. Adipisicing ea commodo qui reprehenderit. Dolore sit elit eu in cupidatat. Lorem exercitation dolor eiusmod aliquip ea fugiat id quis non.\r\n",
                      time: "07/04/2019 04:28:36",
                      author: "friend"
                    },
                    {
                      message: "Excepteur est eiusmod occaecat eiusmod. Incididunt esse duis sit dolor quis veniam sit sit aliqua labore nisi magna veniam. Do excepteur velit Lorem in aliquip minim ad laboris laborum in quis. Quis nisi elit adipisicing laboris reprehenderit consectetur velit id laborum mollit occaecat duis.\r\n",
                      time: "15/04/2020 22:38:53",
                      author: "sending"
                    },
                    {
                      message: "Cupidatat ad veniam fugiat irure ex do Lorem anim proident officia mollit elit. Fugiat consequat ut ea nulla officia labore duis anim. Magna consequat cupidatat voluptate anim pariatur ut id quis nulla dolor.\r\n",
                      time: "25/07/2019 19:31:26",
                      author: "friend"
                    },
                    {
                      message: "Id in occaecat in et id esse ullamco reprehenderit ex veniam. Excepteur id Lorem ipsum et anim deserunt sint quis eu do exercitation anim voluptate. Et consectetur nostrud minim ipsum ex est amet esse enim. Nostrud adipisicing anim qui dolor ut deserunt. Dolore qui et pariatur elit nisi velit ullamco aliquip velit excepteur veniam fugiat. Est nulla duis deserunt non non id velit occaecat.\r\n",
                      time: "07/08/2019 10:25:03",
                      author: "friend"
                    },
                    {
                      message: "Qui ex eiusmod proident fugiat deserunt eu non velit in est ipsum consequat aliquip. Ullamco irure nisi minim mollit. Velit sint non eiusmod esse dolor enim deserunt ea aute laborum consequat. Eiusmod id commodo in ex ex non sunt minim ex irure cillum laboris aute.\r\n",
                      time: "10/04/2020 03:40:53",
                      author: "sending"
                    },
                    {
                      message: "Mollit sint velit irure ex consequat dolore sunt nisi nisi. Non deserunt Lorem cupidatat excepteur duis irure ut. Pariatur Lorem sunt eu et id minim nisi proident aute ut.\r\n",
                      time: "21/09/2019 07:09:55",
                      author: "friend"
                    },
                    {
                      message: "Ut ea do ullamco consequat. Sint irure deserunt aliqua tempor consectetur adipisicing nulla consectetur amet sit ad sit quis ex. Proident ut labore commodo non consequat consequat excepteur ullamco tempor deserunt laborum nulla Lorem. Mollit aliquip proident sit aliqua veniam duis do eu aliqua consequat reprehenderit incididunt laborum sint. Velit non in officia ea non tempor irure ipsum dolore aute.\r\n",
                      time: "23/09/2020 19:19:06",
                      author: "friend"
                    },
                    {
                      message: "Qui aute velit non ea adipisicing consequat mollit ea eu cupidatat nisi ut aliquip officia. Est incididunt anim voluptate exercitation pariatur aute minim eiusmod sit nulla eu sint. Ad in culpa qui nisi ut labore proident minim nostrud. Velit do quis anim officia do tempor enim tempor deserunt deserunt nulla qui minim. Fugiat duis officia ex voluptate excepteur fugiat officia. Do voluptate ipsum mollit id incididunt dolore voluptate pariatur laborum minim proident nostrud ex sunt. Anim sit amet enim cillum minim.\r\n",
                      time: "14/05/2019 06:25:38",
                      author: "friend"
                    },
                    {
                      message: "Nulla ullamco non excepteur cillum magna velit. Eiusmod deserunt mollit ipsum culpa. Laboris sint tempor duis non quis. Labore sunt culpa exercitation anim anim eiusmod fugiat et duis velit consectetur in reprehenderit incididunt.\r\n",
                      time: "29/04/2019 11:07:15",
                      author: "friend"
                    },
                    {
                      message: "Et culpa pariatur ipsum dolore dolore tempor exercitation do tempor. Sunt ex id Lorem ullamco eu sit deserunt eu duis excepteur consequat nostrud nulla dolore. Voluptate mollit exercitation sunt dolor. Qui adipisicing non do sunt dolore duis mollit in sint aliqua enim. Eu in nostrud velit nulla quis est exercitation ad laborum enim nisi est ad. Eiusmod ullamco elit ea ipsum deserunt cillum minim id id.\r\n",
                      time: "09/07/2020 12:57:51",
                      author: "friend"
                    },
                    {
                      message: "Occaecat proident culpa consequat id eu velit velit excepteur adipisicing. Veniam ad enim labore voluptate mollit deserunt nostrud. Incididunt fugiat eu exercitation tempor nostrud enim velit mollit ea qui mollit cupidatat commodo veniam. Fugiat laboris nostrud enim sint esse voluptate deserunt sunt esse qui ullamco culpa elit ut. Exercitation proident voluptate cupidatat qui ut magna tempor enim do dolore.\r\n",
                      time: "11/05/2020 10:39:40",
                      author: "sending"
                    },
                    {
                      message: "Incididunt sint laboris ex irure dolor dolor elit consequat id veniam cillum ad. Ea adipisicing ipsum incididunt aliquip amet. Sit sint amet do pariatur incididunt esse dolore tempor quis ipsum reprehenderit quis in reprehenderit. In amet labore eiusmod laborum mollit do. Eu qui mollit occaecat occaecat non aliqua culpa amet officia. Exercitation in excepteur sunt consequat aute duis dolor et.\r\n",
                      time: "19/04/2019 17:20:06",
                      author: "sending"
                    },
                    {
                      message: "Consequat aute sunt aliqua voluptate Lorem amet anim sint cupidatat. Laboris veniam ut et quis culpa. Et id officia minim mollit esse dolor. Deserunt irure incididunt labore exercitation cillum esse. Non sunt consectetur incididunt mollit. Labore duis irure tempor deserunt mollit ut occaecat.\r\n",
                      time: "21/02/2020 20:45:25",
                      author: "sending"
                    },
                    {
                      message: "Incididunt velit qui dolor ex velit occaecat eu enim. Incididunt laborum et officia cillum nostrud deserunt anim nisi voluptate proident deserunt cupidatat excepteur veniam. Officia nisi ad do do veniam esse cupidatat ea quis occaecat duis ipsum magna aliqua.\r\n",
                      time: "16/11/2019 19:15:57",
                      author: "sending"
                    },
                    {
                      message: "Veniam incididunt ea exercitation commodo deserunt proident officia ullamco. Eu magna laboris consequat dolore cupidatat reprehenderit dolore aliqua labore sit ad eu. Esse Lorem velit tempor voluptate consequat tempor irure. Consequat velit tempor laboris nisi nostrud eiusmod quis minim fugiat.\r\n",
                      time: "26/05/2019 16:23:10",
                      author: "friend"
                    },
                    {
                      message: "Quis nulla et occaecat aute ullamco cupidatat tempor officia id mollit ut ad. Sit in ad esse aute esse pariatur aliquip aute. Deserunt eiusmod qui dolore quis cupidatat cillum eu culpa deserunt excepteur ad commodo ea laborum. Culpa ipsum minim aliquip nisi minim do sit ut magna consectetur minim.\r\n",
                      time: "18/04/2020 13:24:16",
                      author: "friend"
                    },
                    {
                      message: "Esse est fugiat adipisicing voluptate excepteur laboris mollit anim et irure consequat est et quis. Ullamco id occaecat amet commodo labore id occaecat tempor consequat anim. Et elit officia do est dolor labore. Consectetur sint eiusmod duis irure dolor amet enim occaecat sit aute quis.\r\n",
                      time: "01/03/2020 03:46:41",
                      author: "sending"
                    },
                    {
                      message: "Esse occaecat sint laboris velit ad aliquip in ut ullamco mollit eiusmod irure magna ad. Veniam in laboris sint commodo veniam aliqua do fugiat voluptate sit ut. Do ipsum aliqua labore nostrud id cupidatat amet est. Ad pariatur do enim irure ullamco laborum voluptate in. Aute aute minim commodo eiusmod sint et elit cupidatat officia do. Exercitation cupidatat qui consectetur proident deserunt non adipisicing. Eiusmod aute ut occaecat laborum.\r\n",
                      time: "24/07/2019 19:14:23",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 14,
                  name: "Jessica Hoover",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/26.png",
                  status: "Escrevendo...",
                  mensagens: [
                    {
                      message: "Quis nostrud mollit incididunt duis duis dolore. Sit ipsum ullamco ullamco incididunt labore commodo. Aliqua duis ullamco ex et magna consequat enim voluptate esse fugiat.\r\n",
                      time: "07/09/2019 11:19:21",
                      author: "friend"
                    },
                    {
                      message: "Ut nostrud consequat do nulla magna elit sit tempor mollit officia occaecat est elit magna. Deserunt ut aliqua tempor ut aliqua voluptate officia eu commodo velit occaecat do occaecat cupidatat. Sunt labore cillum voluptate laboris nisi tempor. Occaecat amet voluptate eu consectetur incididunt nisi elit in in irure.\r\n",
                      time: "23/03/2020 05:10:40",
                      author: "sending"
                    },
                    {
                      message: "Magna adipisicing duis sint velit Lorem. Ad aliquip ex Lorem id et ea. Officia anim aute elit amet. Id exercitation consequat sunt eiusmod cupidatat labore ut exercitation. Incididunt dolor ullamco et quis deserunt labore anim deserunt tempor.\r\n",
                      time: "05/02/2020 06:27:20",
                      author: "friend"
                    },
                    {
                      message: "Ad duis anim reprehenderit eu sint sit occaecat. Ipsum commodo elit labore quis sit. Magna incididunt excepteur irure tempor ad do minim. Duis nisi pariatur sint cillum irure ullamco exercitation voluptate excepteur occaecat.\r\n",
                      time: "27/03/2020 08:21:33",
                      author: "sending"
                    },
                    {
                      message: "Tempor qui labore aliquip deserunt incididunt quis dolor sit ex ex enim deserunt nisi exercitation. Ut laboris ipsum dolor id sint reprehenderit velit veniam fugiat laboris. Proident cupidatat ex in duis labore mollit sunt commodo do. Sit cillum ea labore labore irure minim.\r\n",
                      time: "06/09/2019 20:31:47",
                      author: "friend"
                    },
                    {
                      message: "Est non ad ea deserunt. Exercitation quis velit exercitation magna veniam. Aute proident ex nisi Lorem in consequat adipisicing. Et enim tempor dolore pariatur labore nulla nisi eu nisi veniam reprehenderit ex elit. Laboris consequat amet dolor ad.\r\n",
                      time: "01/03/2019 02:50:18",
                      author: "sending"
                    },
                    {
                      message: "Ea adipisicing esse esse reprehenderit dolore elit ipsum non pariatur consectetur. Officia ipsum aute voluptate aliquip mollit labore Lorem deserunt nisi. Enim eu fugiat officia non aute Lorem exercitation et deserunt labore culpa. Labore culpa do labore eiusmod et cillum Lorem occaecat eiusmod anim.\r\n",
                      time: "20/01/2020 17:28:53",
                      author: "sending"
                    },
                    {
                      message: "Officia anim duis Lorem amet culpa ex. Exercitation enim nisi labore proident ut ullamco minim reprehenderit ullamco nostrud. Ea consectetur mollit deserunt mollit dolore non in anim. Sunt nulla cupidatat ut sunt et est minim commodo id ad. Laborum consectetur pariatur nisi Lorem sunt elit mollit magna aliqua incididunt adipisicing minim. Nostrud duis dolor ullamco voluptate Lorem labore sit. Laborum duis aute ullamco incididunt do.\r\n",
                      time: "21/04/2019 23:11:10",
                      author: "sending"
                    },
                    {
                      message: "Nostrud laborum nulla ipsum nostrud sint excepteur deserunt fugiat deserunt ipsum esse. Ullamco et dolor ex id labore ea in sunt ipsum qui proident in dolor. Sit sunt quis duis ullamco adipisicing nulla voluptate officia in ad ex esse labore. Esse velit sunt culpa Lorem pariatur voluptate consequat ipsum non. Irure eiusmod amet commodo voluptate est in deserunt culpa velit minim Lorem.\r\n",
                      time: "17/06/2019 18:20:15",
                      author: "sending"
                    },
                    {
                      message: "Elit sint irure ea amet dolor aliquip veniam aute nisi. Voluptate nisi velit ad culpa. Cillum irure esse enim dolore labore exercitation exercitation. Velit in est est deserunt.\r\n",
                      time: "19/08/2020 05:30:01",
                      author: "friend"
                    },
                    {
                      message: "Pariatur anim ullamco in minim officia reprehenderit id ullamco id velit duis qui anim. Irure ipsum ipsum eu ex voluptate. Lorem et ad in pariatur labore irure nisi anim dolore sint veniam ad laboris. Consequat officia ullamco elit culpa ut cupidatat.\r\n",
                      time: "12/07/2019 18:00:47",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit nostrud laborum Lorem sint est nisi aliquip reprehenderit dolore amet. Consequat nostrud pariatur eu consequat esse cillum cupidatat consequat duis ullamco. In consequat duis laborum aliqua duis ipsum labore Lorem ea est veniam qui.\r\n",
                      time: "17/08/2020 08:53:48",
                      author: "sending"
                    },
                    {
                      message: "Qui nisi id aliqua velit incididunt cupidatat consequat velit consectetur non fugiat esse. Cupidatat aliqua ex laborum laborum mollit culpa ea laborum occaecat cupidatat. Enim dolore cupidatat aliqua ex pariatur irure id anim. Excepteur excepteur amet quis occaecat velit. Pariatur laborum Lorem id consectetur mollit tempor quis tempor. Deserunt in amet duis do eu anim sint consectetur. Eiusmod pariatur sunt veniam nisi occaecat aliquip.\r\n",
                      time: "15/05/2019 07:44:26",
                      author: "sending"
                    },
                    {
                      message: "Sunt deserunt consequat do tempor duis ad nulla pariatur sit voluptate commodo id duis velit. Id sit fugiat qui esse velit aute nisi ea magna est nulla laboris. Voluptate incididunt occaecat consectetur duis laborum fugiat aliquip ex aliqua qui nostrud do. Pariatur ullamco qui laborum irure quis sunt ea. Minim tempor consectetur enim amet dolore enim ullamco laboris ex ad.\r\n",
                      time: "27/09/2019 05:54:35",
                      author: "friend"
                    },
                    {
                      message: "Irure amet sunt officia consequat irure do velit deserunt cupidatat ipsum. Duis voluptate et esse sint qui fugiat id id sint voluptate aliquip fugiat. Mollit ex dolore deserunt nisi sit dolor voluptate commodo dolore ea adipisicing nulla aute. Laborum nostrud incididunt aliqua sunt do nisi labore ad do anim cillum. Ut dolore sit ullamco sint proident commodo et.\r\n",
                      time: "05/11/2019 05:56:20",
                      author: "sending"
                    },
                    {
                      message: "Amet est magna in ipsum occaecat do ad. Incididunt consequat aliquip quis do cillum proident dolor aute est nisi reprehenderit. Dolor reprehenderit ad excepteur irure non sint minim mollit minim qui sit deserunt do. Occaecat laboris tempor anim laborum ut voluptate incididunt quis laborum qui aliqua eiusmod Lorem nostrud. Laborum pariatur cillum occaecat id. Id sit anim eu consequat dolore esse veniam. Aute adipisicing mollit ullamco aliqua incididunt mollit laborum adipisicing anim enim sint labore.\r\n",
                      time: "25/06/2020 00:26:10",
                      author: "friend"
                    },
                    {
                      message: "Eu ex magna incididunt dolor consectetur sit culpa pariatur nostrud magna deserunt. Cupidatat consequat ad proident officia aute velit fugiat ullamco qui ea Lorem incididunt sit velit. Ullamco ut incididunt non culpa culpa consectetur irure. Nisi dolor ad Lorem qui cupidatat occaecat nulla cupidatat cillum laboris anim. Voluptate laboris est in labore aute eu minim non sit consequat est esse enim ex. Dolor deserunt quis nisi quis consectetur fugiat magna enim mollit cillum cupidatat.\r\n",
                      time: "22/04/2019 01:43:22",
                      author: "sending"
                    },
                    {
                      message: "Reprehenderit consequat consequat ullamco incididunt irure ex et pariatur. Irure eiusmod Lorem reprehenderit laboris deserunt. Ex nulla quis laborum duis id nisi labore sit reprehenderit magna labore pariatur commodo.\r\n",
                      time: "10/11/2019 07:56:57",
                      author: "friend"
                    },
                    {
                      message: "Sint est id consequat magna irure nisi culpa. Amet mollit do duis pariatur laboris dolor amet velit dolor aliquip ullamco in et. Et tempor exercitation ut aute in mollit laborum ut cupidatat magna in. Dolor commodo exercitation cillum do aliquip occaecat id qui. Enim aliquip laboris occaecat id fugiat nisi cillum.\r\n",
                      time: "19/12/2019 17:13:38",
                      author: "friend"
                    },
                    {
                      message: "Dolore excepteur amet labore est nostrud esse ut occaecat sint occaecat incididunt mollit proident anim. Culpa et fugiat amet ad commodo commodo consequat. Laboris dolore mollit cillum aute non cillum quis fugiat labore pariatur cupidatat voluptate laborum. Lorem ea consectetur minim magna exercitation tempor adipisicing adipisicing enim exercitation. Ipsum est reprehenderit elit velit proident ipsum do amet veniam veniam nostrud non.\r\n",
                      time: "29/09/2019 02:15:20",
                      author: "friend"
                    },
                    {
                      message: "Minim ad quis est minim aliquip nulla est non est nostrud nisi. Elit cupidatat culpa aliquip dolore anim sit nostrud cupidatat consectetur culpa fugiat mollit consectetur minim. Proident laborum laboris ex pariatur velit ipsum adipisicing duis deserunt amet eiusmod minim. In excepteur ipsum eu dolor velit velit ut cillum nostrud magna. Ad magna ipsum aute adipisicing est duis qui incididunt sint. Occaecat ex mollit occaecat ipsum consectetur dolore amet incididunt. Elit esse occaecat ullamco qui pariatur ex aliquip velit sit amet incididunt sint.\r\n",
                      time: "26/09/2019 08:04:17",
                      author: "friend"
                    },
                    {
                      message: "Aliqua amet sint ullamco id pariatur do et sit ad dolor in nisi. Enim sunt Lorem dolore irure velit aute pariatur pariatur. Deserunt consequat incididunt ad ad amet commodo ea velit est id. Cillum incididunt excepteur culpa enim eu occaecat do consequat duis.\r\n",
                      time: "08/12/2019 16:03:30",
                      author: "friend"
                    },
                    {
                      message: "Non excepteur commodo nisi aute cupidatat officia commodo fugiat commodo ea. Anim nostrud aliquip ea aute adipisicing commodo. Et nulla magna exercitation adipisicing eu.\r\n",
                      time: "02/03/2020 13:21:26",
                      author: "sending"
                    },
                    {
                      message: "Adipisicing irure laborum deserunt sint ex. Culpa sint ullamco laboris cupidatat adipisicing pariatur aliqua voluptate minim. In velit incididunt eu tempor officia cupidatat ad adipisicing enim irure. Mollit magna aliqua consectetur id do reprehenderit. Reprehenderit ullamco fugiat ea sit irure laboris.\r\n",
                      time: "30/11/2019 18:27:26",
                      author: "sending"
                    },
                    {
                      message: "Veniam dolor ex dolore quis mollit nisi. Ex fugiat sit aute Lorem. Consectetur magna consequat minim labore nulla aute. Deserunt reprehenderit dolor irure exercitation culpa incididunt aliquip proident laboris commodo minim minim. Labore magna mollit ex veniam voluptate.\r\n",
                      time: "18/04/2019 01:10:48",
                      author: "friend"
                    },
                    {
                      message: "Tempor est nulla nisi exercitation enim aliquip nisi est proident nostrud elit minim Lorem. In proident laborum do mollit incididunt do laborum officia exercitation. Minim ut mollit veniam nisi anim ex. Labore exercitation dolor ut exercitation sint ipsum anim. Ullamco pariatur ea proident aliqua consequat sit et. Commodo non dolore ea cupidatat reprehenderit exercitation nulla ad cillum amet qui anim aliquip.\r\n",
                      time: "28/03/2019 16:22:11",
                      author: "friend"
                    },
                    {
                      message: "Magna dolore nulla enim eiusmod nulla cupidatat enim. Sunt irure exercitation culpa id Lorem nulla adipisicing proident. Consectetur quis voluptate amet et commodo in veniam do Lorem dolor non mollit. Occaecat proident Lorem laboris nostrud enim ea commodo deserunt nisi aliquip ea occaecat officia. Est esse id ea occaecat magna mollit ullamco.\r\n",
                      time: "25/04/2019 15:08:24",
                      author: "sending"
                    },
                    {
                      message: "Laborum velit qui reprehenderit ex id quis exercitation Lorem ex officia aliquip mollit veniam eu. Est non fugiat officia adipisicing deserunt voluptate aliqua dolor ullamco ad eiusmod voluptate. Adipisicing minim do magna commodo non laboris fugiat aute cupidatat irure. In do eu voluptate do sint cillum culpa. Excepteur nulla enim amet id ullamco id. Magna sunt Lorem ullamco elit amet amet cillum nostrud esse ipsum elit.\r\n",
                      time: "25/02/2019 14:29:57",
                      author: "friend"
                    },
                    {
                      message: "Exercitation quis et consectetur ullamco nulla officia proident exercitation adipisicing velit aliquip qui irure. Eu et ad esse ad quis. Qui fugiat consequat esse sunt occaecat nulla sint voluptate quis consectetur. Et consequat reprehenderit nostrud ipsum ullamco nostrud. Consectetur dolor anim ullamco est commodo est sit velit eiusmod aute duis magna sit sunt.\r\n",
                      time: "17/04/2019 22:02:19",
                      author: "sending"
                    },
                    {
                      message: "Incididunt proident velit veniam reprehenderit Lorem enim officia fugiat irure sit elit incididunt. Excepteur nulla dolore culpa pariatur esse Lorem proident. Ex esse incididunt in proident qui labore esse quis amet do. Aute elit commodo nostrud voluptate adipisicing mollit non commodo adipisicing deserunt. Minim officia eiusmod nisi sint do laboris culpa incididunt minim velit Lorem magna excepteur. Do adipisicing nostrud sit aliquip ea magna aliqua in sunt incididunt.\r\n",
                      time: "20/04/2020 11:07:28",
                      author: "sending"
                    },
                    {
                      message: "Excepteur qui proident sunt laborum dolore quis cillum cillum. Proident culpa tempor voluptate id excepteur ad dolore non qui. Anim ad proident aute deserunt qui commodo cupidatat non minim. Ullamco cillum nostrud dolor ut adipisicing qui ut officia elit veniam ea in cillum est. Nisi nostrud nostrud do sunt qui labore eu.\r\n",
                      time: "25/01/2020 09:35:35",
                      author: "friend"
                    },
                    {
                      message: "Labore exercitation sit aliqua laboris occaecat occaecat enim sit ea velit cupidatat incididunt. Dolor aliquip deserunt cupidatat exercitation eu amet minim in cupidatat ea est consectetur cupidatat. Ut fugiat id aliqua voluptate aliquip Lorem minim. Ea ex labore laboris voluptate incididunt cupidatat magna occaecat elit anim. In non incididunt et aute nisi cillum exercitation commodo culpa aute excepteur. Enim laborum duis cillum dolor fugiat adipisicing nisi excepteur nulla ex magna fugiat nulla.\r\n",
                      time: "26/06/2019 15:31:11",
                      author: "sending"
                    },
                    {
                      message: "Duis veniam amet ullamco nostrud ex elit eu ea. Tempor cillum sit ut velit eiusmod ea eiusmod commodo sit veniam. Adipisicing reprehenderit dolor esse ad ex non reprehenderit voluptate deserunt consequat. Magna dolor eu commodo veniam ea fugiat dolor excepteur. Commodo ullamco id exercitation commodo et magna non ut sint ut. Non eu non excepteur incididunt officia nostrud enim non est quis. Ex est cillum reprehenderit tempor esse.\r\n",
                      time: "26/08/2020 16:30:53",
                      author: "sending"
                    },
                    {
                      message: "Ex magna in in est non culpa nostrud qui sunt esse aute consectetur anim. Est elit eu in irure culpa cupidatat velit fugiat. Dolore magna sit deserunt deserunt.\r\n",
                      time: "19/08/2020 22:38:20",
                      author: "friend"
                    },
                    {
                      message: "Quis mollit do cillum et deserunt Lorem. Incididunt esse qui qui aute pariatur nisi et amet reprehenderit qui consectetur. Sunt sit incididunt nulla dolore voluptate fugiat fugiat minim laborum adipisicing aliqua. Tempor ex minim enim in veniam ea commodo exercitation voluptate ea minim labore consectetur occaecat. Lorem eiusmod sit deserunt proident exercitation. Aliqua cupidatat elit consectetur commodo reprehenderit anim ullamco voluptate officia.\r\n",
                      time: "22/08/2020 13:07:10",
                      author: "sending"
                    },
                    {
                      message: "Ut veniam laborum sint cupidatat exercitation magna amet ut. Quis fugiat excepteur sint officia voluptate quis incididunt pariatur adipisicing velit sint do. Enim pariatur amet veniam enim cillum consectetur. Magna enim esse in id culpa id fugiat officia labore aliqua id reprehenderit eu. Et velit esse in ullamco do cupidatat nisi eiusmod occaecat esse excepteur consequat. Non laborum laboris ipsum mollit irure quis eiusmod occaecat adipisicing. Enim adipisicing aute labore dolore duis aliquip irure ad et eu aliquip fugiat.\r\n",
                      time: "19/02/2020 05:53:53",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod proident minim incididunt in. Sit incididunt labore laboris commodo occaecat consectetur eiusmod anim incididunt ipsum dolore est labore. In nulla tempor proident irure commodo. Laborum mollit excepteur laboris qui ut exercitation ea laborum et reprehenderit. Incididunt cupidatat et pariatur Lorem.\r\n",
                      time: "05/04/2020 17:11:31",
                      author: "sending"
                    },
                    {
                      message: "Consequat cillum consequat incididunt eiusmod proident amet qui aute eiusmod incididunt voluptate nisi tempor. Dolor dolore Lorem exercitation nostrud duis cillum officia. Exercitation minim anim qui nisi cillum sunt elit quis.\r\n",
                      time: "18/07/2019 14:25:56",
                      author: "friend"
                    },
                    {
                      message: "Ipsum deserunt nisi sunt cillum quis enim adipisicing consequat. Exercitation exercitation veniam labore anim ea occaecat amet anim consequat ex nostrud cupidatat velit. Do in occaecat duis eiusmod culpa est commodo voluptate tempor consectetur. Nostrud pariatur nulla commodo do. Occaecat ullamco ea mollit laborum magna reprehenderit qui minim Lorem.\r\n",
                      time: "16/01/2020 14:01:25",
                      author: "sending"
                    },
                    {
                      message: "Commodo aliqua ex excepteur anim sint qui. Veniam tempor amet ipsum sint incididunt sit sint Lorem sint ad excepteur sint. Fugiat ad ad quis non. Cupidatat aliquip eiusmod mollit id ad aliqua minim in laboris pariatur adipisicing. Amet duis anim aliquip minim irure consectetur id.\r\n",
                      time: "13/07/2019 09:57:06",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 15,
                  name: "Marquez Contreras",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/37.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Veniam amet Lorem qui do ex sunt est amet cupidatat ut fugiat pariatur magna. Velit ipsum id dolor ut do cillum labore voluptate est incididunt aliquip ex sint. Aliquip est sunt magna amet laboris amet. Laboris ullamco aliqua officia sint enim occaecat duis. Eiusmod sint reprehenderit ea ea. Pariatur sunt voluptate ea do. Veniam labore mollit quis cillum minim Lorem consectetur.\r\n",
                      time: "14/10/2019 13:12:13",
                      author: "friend"
                    },
                    {
                      message: "Adipisicing aute elit est ea veniam duis. Consectetur duis exercitation aliquip incididunt deserunt officia est laborum voluptate magna in. Dolore adipisicing deserunt non nisi eu.\r\n",
                      time: "24/09/2019 08:54:48",
                      author: "sending"
                    },
                    {
                      message: "Adipisicing sunt non nisi cillum duis sint ad elit deserunt culpa est. Pariatur ex aliqua Lorem eiusmod reprehenderit labore irure laborum aliqua fugiat excepteur. Esse esse officia dolore enim exercitation et do quis Lorem enim. Lorem sit est sint dolore. Velit nisi reprehenderit consectetur eu ad sit velit ipsum id irure adipisicing est.\r\n",
                      time: "22/05/2019 23:49:06",
                      author: "friend"
                    },
                    {
                      message: "Sint ut non velit est elit nulla aliqua magna voluptate anim proident ut. Non excepteur do nisi velit cupidatat ullamco fugiat culpa minim sint laboris. Duis sit proident dolor tempor pariatur eiusmod consequat irure. Veniam laborum excepteur proident ullamco nisi aliqua id do voluptate. Aliqua occaecat mollit officia irure ad exercitation. Minim amet adipisicing ad aliqua in exercitation. Tempor reprehenderit culpa enim voluptate anim et fugiat officia in exercitation.\r\n",
                      time: "19/05/2020 09:44:25",
                      author: "friend"
                    },
                    {
                      message: "Nostrud ut anim do sint enim incididunt laborum velit do incididunt minim qui consectetur. Exercitation voluptate exercitation est voluptate est deserunt irure aliqua. Exercitation ullamco tempor magna aliqua consequat Lorem reprehenderit et mollit irure culpa consequat. Quis officia officia excepteur qui velit occaecat labore in consequat. Reprehenderit id exercitation mollit dolor nisi pariatur Lorem ipsum. Occaecat do commodo magna consequat enim aliquip amet. Anim eiusmod quis enim mollit in voluptate sunt sint laboris cupidatat proident adipisicing pariatur elit.\r\n",
                      time: "24/07/2020 21:05:31",
                      author: "sending"
                    },
                    {
                      message: "Minim laborum occaecat aliqua fugiat adipisicing aliqua exercitation. Ipsum qui culpa id Lorem sunt pariatur ipsum ut. Duis laborum nisi elit est magna anim aute incididunt.\r\n",
                      time: "10/06/2019 23:16:18",
                      author: "friend"
                    },
                    {
                      message: "Do dolor cupidatat officia ullamco voluptate minim non. Veniam et magna veniam ullamco id cupidatat tempor sint aliqua consequat. Enim anim et sit ut aliqua velit nostrud ipsum veniam occaecat est pariatur. Labore sint dolore commodo in velit sit fugiat veniam aliqua cupidatat occaecat. Dolor eiusmod culpa incididunt consequat elit mollit amet ad non adipisicing id. Elit aliqua consequat cillum occaecat occaecat esse sunt duis eiusmod ullamco et esse. Adipisicing in sit irure velit nisi ad mollit reprehenderit aliqua voluptate laborum tempor.\r\n",
                      time: "20/09/2020 11:47:55",
                      author: "sending"
                    },
                    {
                      message: "Aliqua exercitation cillum qui do cupidatat id magna sunt enim esse. Laboris velit ad deserunt magna qui magna reprehenderit occaecat aliqua in. Dolor consectetur occaecat aliqua officia commodo ipsum commodo. Sit dolore labore ex nostrud ad pariatur laboris cupidatat.\r\n",
                      time: "17/08/2019 16:02:55",
                      author: "friend"
                    },
                    {
                      message: "Consequat qui non do commodo. Cillum est voluptate sunt qui tempor minim eiusmod quis irure occaecat non. Consectetur est veniam aliquip quis. Reprehenderit anim esse eu duis irure. Ut anim consectetur cupidatat duis. Dolore et in magna elit aliquip ad. Cillum nisi labore cupidatat do ipsum dolore eiusmod adipisicing tempor ea mollit dolor.\r\n",
                      time: "21/07/2019 00:08:53",
                      author: "sending"
                    },
                    {
                      message: "Officia consectetur nulla aliquip incididunt labore consequat. Nisi pariatur ea occaecat amet. Ut qui anim irure officia ad esse reprehenderit.\r\n",
                      time: "17/02/2019 03:26:39",
                      author: "friend"
                    },
                    {
                      message: "Ex aliqua pariatur magna labore Lorem dolor velit enim id in dolore dolore. Cupidatat adipisicing minim quis et adipisicing elit. Elit minim et aliqua ut. Cupidatat ut sunt exercitation nisi sint sint labore. Dolor eu duis reprehenderit aliquip occaecat amet enim non commodo. Culpa pariatur dolor Lorem adipisicing tempor veniam ullamco.\r\n",
                      time: "13/07/2019 23:59:59",
                      author: "friend"
                    },
                    {
                      message: "Duis sint nisi tempor sunt sunt. Anim culpa nostrud ea occaecat anim non laborum nostrud voluptate id nisi. Dolor irure officia mollit sit. Non enim minim cupidatat nulla veniam consectetur magna minim laboris aliqua veniam. Occaecat eu culpa voluptate ipsum non quis. Anim esse non consectetur do culpa enim voluptate aliqua mollit pariatur consectetur. In est sint occaecat sit dolore sit eu aute id reprehenderit.\r\n",
                      time: "10/09/2019 05:21:26",
                      author: "friend"
                    },
                    {
                      message: "Non excepteur in officia officia in anim ex anim aute aliqua sint occaecat. Amet est labore fugiat et officia adipisicing tempor occaecat. Proident aliquip velit laborum non ut adipisicing excepteur consectetur ut minim eiusmod. Elit proident exercitation voluptate irure anim cillum. Mollit enim incididunt officia exercitation.\r\n",
                      time: "02/11/2019 13:02:13",
                      author: "friend"
                    },
                    {
                      message: "Consequat nisi amet laborum culpa consectetur deserunt nostrud mollit. Officia excepteur est consequat ex aliqua. Ex tempor in irure sit non commodo nisi pariatur sunt aliqua velit magna. Magna quis aliqua ullamco ut culpa ad officia. Dolor amet non deserunt ut. Ipsum eu anim incididunt non minim do eiusmod culpa ut quis mollit reprehenderit commodo.\r\n",
                      time: "09/09/2019 06:50:09",
                      author: "sending"
                    },
                    {
                      message: "Tempor excepteur tempor sunt do id voluptate. Dolor aliqua irure aliquip amet deserunt consectetur sunt id aliqua incididunt irure aliquip deserunt. Exercitation laboris enim dolore sint ea. Aute ex reprehenderit culpa aliquip nulla do irure ipsum magna pariatur dolore. Dolore in ullamco labore aliqua mollit ea laboris dolor eu incididunt duis. Pariatur consequat laboris laborum consectetur magna deserunt nulla amet adipisicing. Consequat cupidatat fugiat eiusmod sit ad eiusmod aute ipsum do ad adipisicing aliqua est.\r\n",
                      time: "20/02/2020 02:53:13",
                      author: "sending"
                    },
                    {
                      message: "Dolor quis cillum officia elit culpa aliqua. Reprehenderit do exercitation cupidatat nisi. Cillum adipisicing deserunt velit velit cillum mollit tempor amet ex.\r\n",
                      time: "10/03/2020 08:16:37",
                      author: "sending"
                    },
                    {
                      message: "Dolor mollit cupidatat labore ex cupidatat nostrud mollit. Cupidatat in sint est adipisicing in laborum tempor dolore aliquip Lorem nostrud anim. Incididunt cupidatat aliqua ea do officia fugiat culpa deserunt ullamco tempor occaecat deserunt laborum veniam. Quis ea minim cupidatat dolor cillum. Et minim aute ut id commodo et occaecat fugiat duis occaecat et do veniam. Reprehenderit labore minim dolore sit proident culpa est.\r\n",
                      time: "11/05/2020 18:13:17",
                      author: "sending"
                    },
                    {
                      message: "Nulla nisi dolore ipsum enim pariatur consectetur sunt nulla minim exercitation dolore. Dolore cupidatat dolore eiusmod ut est sint reprehenderit. Pariatur do tempor ex proident et nostrud in eiusmod eu duis occaecat.\r\n",
                      time: "26/06/2020 14:37:43",
                      author: "sending"
                    },
                    {
                      message: "Tempor et dolor proident velit sint eiusmod elit. In veniam eiusmod excepteur cillum magna occaecat nisi est exercitation fugiat fugiat ea officia. Voluptate magna consectetur exercitation qui in laborum irure dolor culpa aliqua id. Aliqua nisi eiusmod Lorem adipisicing sit occaecat ex esse sint voluptate do veniam veniam. Laboris excepteur do aliqua cupidatat dolor sint ad esse in.\r\n",
                      time: "12/04/2020 05:45:25",
                      author: "sending"
                    },
                    {
                      message: "Aliqua ad non laboris velit ipsum voluptate et sint Lorem enim. Officia adipisicing labore adipisicing deserunt velit laborum nisi amet. Dolor ut eu Lorem sit anim. Culpa cillum quis aute dolore pariatur ipsum et anim laboris fugiat dolor occaecat non. Commodo fugiat mollit proident exercitation nisi et sit voluptate id et proident ullamco elit consectetur.\r\n",
                      time: "14/09/2019 10:13:05",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 16,
                  name: "Ingram Cortez",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/29.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Deserunt officia commodo Lorem velit dolore. Excepteur enim tempor excepteur deserunt dolor anim culpa duis reprehenderit. Officia amet nulla labore nostrud est do excepteur. Duis velit mollit amet ad amet. Eiusmod cillum pariatur reprehenderit sunt nisi aliquip velit Lorem ipsum Lorem eiusmod aute anim.\r\n",
                      time: "26/08/2019 03:12:18",
                      author: "sending"
                    },
                    {
                      message: "Ut ex proident Lorem aliqua exercitation pariatur magna nulla id do ipsum proident enim ex. Magna est culpa culpa reprehenderit consectetur eu proident veniam cillum consequat ex velit nostrud ullamco. Amet minim minim aliquip voluptate nostrud cupidatat aliqua non enim amet. Amet consectetur duis anim reprehenderit aliquip quis pariatur in ut nulla voluptate do.\r\n",
                      time: "28/07/2019 10:02:01",
                      author: "friend"
                    },
                    {
                      message: "Sint irure eu consequat enim nostrud eu pariatur minim proident ad occaecat. Minim cillum elit veniam mollit anim quis. Non sit fugiat cillum laboris tempor sit aute culpa laboris est sint eu. Qui aliquip duis sunt quis. Mollit incididunt ut laborum ex eu. Do magna incididunt sunt ullamco ex excepteur.\r\n",
                      time: "18/06/2020 12:50:08",
                      author: "friend"
                    },
                    {
                      message: "Officia cillum ex est elit magna eiusmod exercitation fugiat est tempor. Aute nulla voluptate eu officia duis proident eu. Pariatur dolore ut occaecat qui anim aute. Do duis in est sint ipsum sit.\r\n",
                      time: "17/03/2020 17:44:45",
                      author: "friend"
                    },
                    {
                      message: "Lorem elit occaecat officia laboris pariatur pariatur nulla eiusmod ullamco et in laborum fugiat tempor. Dolor proident in deserunt labore cupidatat consectetur. Deserunt culpa aliquip sint occaecat magna qui consectetur eu deserunt veniam Lorem esse ullamco proident. Consequat sint deserunt ex cupidatat. Tempor esse eu officia pariatur cillum in eiusmod tempor officia dolor. Est magna proident id adipisicing magna. In consectetur deserunt voluptate labore eiusmod qui sint cupidatat quis officia fugiat ea eiusmod irure.\r\n",
                      time: "06/11/2019 20:35:00",
                      author: "sending"
                    },
                    {
                      message: "Laborum culpa fugiat officia commodo. Duis sunt exercitation et qui Lorem. Excepteur elit tempor in ipsum et ad. Aliqua aliquip ut deserunt pariatur nisi voluptate ipsum. Eiusmod aute velit Lorem id. Tempor aliquip consequat id laboris est irure excepteur. Aute dolor non ex deserunt amet irure incididunt veniam sunt culpa consequat occaecat incididunt mollit.\r\n",
                      time: "16/02/2020 14:29:58",
                      author: "sending"
                    },
                    {
                      message: "In sint nulla pariatur anim ex. Magna aliquip consectetur aute amet incididunt. Magna ut proident occaecat eu aute ea anim tempor eiusmod laboris aute.\r\n",
                      time: "23/03/2019 10:27:12",
                      author: "sending"
                    },
                    {
                      message: "Commodo veniam mollit deserunt sunt mollit ut culpa tempor irure enim cupidatat do non. Voluptate sit quis aliqua ipsum tempor qui. Ex ipsum ipsum adipisicing incididunt laboris. Laborum eu excepteur mollit et ullamco consectetur. In aute amet aliqua sint exercitation est ex exercitation. Eiusmod ex excepteur elit irure aliqua elit sint ipsum do dolor duis qui exercitation ipsum. Excepteur proident quis et et non esse amet.\r\n",
                      time: "23/03/2020 07:22:45",
                      author: "sending"
                    },
                    {
                      message: "Culpa magna aliqua voluptate anim velit reprehenderit nulla nisi aute ea voluptate mollit. Proident amet amet proident sunt qui quis. Non aliquip deserunt ex amet ullamco sunt. Occaecat esse ad exercitation elit sint.\r\n",
                      time: "21/12/2019 07:46:29",
                      author: "sending"
                    },
                    {
                      message: "Aliquip ea aute esse culpa velit non nisi eiusmod. Ex nisi sint cillum dolor velit laboris qui. Fugiat ipsum ad elit velit ut fugiat exercitation labore sunt labore. Nulla exercitation occaecat ad nulla excepteur ullamco adipisicing adipisicing irure officia voluptate. Occaecat irure deserunt mollit ea. Sit non ea incididunt ipsum adipisicing dolore esse.\r\n",
                      time: "09/07/2019 14:29:42",
                      author: "sending"
                    },
                    {
                      message: "Pariatur sit et incididunt dolor commodo cillum. Duis fugiat ad enim et ea nisi duis consequat cillum. Laborum cupidatat exercitation minim occaecat dolore consectetur excepteur eiusmod.\r\n",
                      time: "13/08/2019 01:51:25",
                      author: "sending"
                    },
                    {
                      message: "Aliqua minim Lorem magna dolor duis laborum cillum ut voluptate non magna deserunt. Veniam deserunt aliquip laboris dolore excepteur excepteur sunt veniam adipisicing dolor labore eu laboris. In elit proident sit minim velit id deserunt aute nulla. Qui esse et reprehenderit ut mollit laborum mollit do officia. Commodo incididunt dolore nulla irure fugiat magna ullamco. In cillum ullamco consectetur commodo in non duis ea officia laborum quis in. Excepteur esse duis magna sit ex consequat veniam voluptate veniam aliqua esse.\r\n",
                      time: "10/04/2020 22:38:48",
                      author: "sending"
                    },
                    {
                      message: "Magna id ut eu anim mollit ipsum mollit aliquip elit sunt ad amet. Sunt nisi nisi fugiat incididunt excepteur officia laboris dolor mollit dolor. Ea qui aliqua in consectetur qui cillum eu in duis adipisicing magna. Cupidatat laboris aliqua aute Lorem.\r\n",
                      time: "12/03/2019 04:41:16",
                      author: "sending"
                    },
                    {
                      message: "Minim excepteur nulla amet fugiat id magna. Veniam nisi sunt sit voluptate esse ex culpa culpa dolor laboris commodo sunt aliquip aute. Laboris laborum est anim sunt laboris ex et esse nulla duis nisi ea velit.\r\n",
                      time: "30/06/2020 02:08:18",
                      author: "sending"
                    },
                    {
                      message: "Eu dolor ea laborum tempor esse labore irure nulla est veniam ipsum excepteur. Non amet consequat anim aute ullamco. Est cillum deserunt sint esse aliqua sit. Eiusmod ad irure culpa exercitation adipisicing ipsum cupidatat occaecat. Cupidatat non duis cupidatat consequat do laborum. Fugiat sint non et ea voluptate ad in dolore officia enim esse nisi. Cillum consequat ea ut minim exercitation ea ullamco non.\r\n",
                      time: "22/05/2019 00:20:03",
                      author: "sending"
                    },
                    {
                      message: "Sit cillum ex pariatur officia est deserunt ipsum pariatur aute sit culpa. Laborum ad fugiat sunt dolor in cupidatat esse nisi dolore cupidatat enim. Ut non ullamco reprehenderit ullamco adipisicing duis consequat ullamco et officia ex officia occaecat tempor.\r\n",
                      time: "13/01/2020 00:25:33",
                      author: "friend"
                    },
                    {
                      message: "Cupidatat culpa commodo irure reprehenderit. Tempor anim dolore officia sunt nulla nulla quis. Lorem eu eiusmod aliqua ex nisi ipsum cillum exercitation qui ea dolore sunt. Occaecat adipisicing consequat aute esse aliquip voluptate aliqua. Dolor velit eiusmod non exercitation nulla occaecat aliquip elit. Veniam laborum ipsum velit ea proident dolor ad nostrud ea sit commodo.\r\n",
                      time: "21/08/2019 04:42:45",
                      author: "sending"
                    },
                    {
                      message: "Deserunt ex occaecat ullamco ullamco. Nulla deserunt ut labore duis nulla cillum. Aute excepteur nulla anim culpa ut.\r\n",
                      time: "13/02/2019 00:11:23",
                      author: "sending"
                    },
                    {
                      message: "Culpa magna nisi sit dolore sunt commodo. Et irure occaecat tempor mollit ea. Laborum consectetur fugiat qui sit. Exercitation dolor laboris nisi officia proident in ea eiusmod excepteur est proident. Quis incididunt ea amet aute tempor incididunt. Officia tempor cillum do Lorem pariatur labore esse voluptate eiusmod eiusmod eiusmod dolor. Ipsum nisi ullamco proident et dolor labore laboris.\r\n",
                      time: "23/02/2019 15:22:45",
                      author: "friend"
                    },
                    {
                      message: "Ipsum labore esse eu esse. Minim consectetur magna culpa consequat elit sunt irure commodo. Qui nulla excepteur qui velit sunt labore officia adipisicing deserunt mollit non sint aute.\r\n",
                      time: "03/06/2019 04:03:53",
                      author: "sending"
                    },
                    {
                      message: "Voluptate duis consequat sint mollit aliquip exercitation ut magna proident elit elit. Et cillum sit incididunt elit. Eiusmod occaecat aliquip ut laboris voluptate ad incididunt in. Eu sint excepteur amet laborum qui laborum esse irure labore ullamco cupidatat irure Lorem proident. Nisi irure adipisicing esse et irure aliquip officia. Deserunt tempor dolor quis consequat et est.\r\n",
                      time: "01/08/2019 13:00:40",
                      author: "sending"
                    },
                    {
                      message: "Irure enim occaecat et mollit irure ad laborum ut nostrud tempor Lorem mollit Lorem officia. Id occaecat esse labore sunt ex. Enim deserunt minim nisi aliqua magna.\r\n",
                      time: "10/09/2020 00:43:10",
                      author: "friend"
                    },
                    {
                      message: "Sint anim esse magna excepteur. Ea fugiat dolore fugiat deserunt veniam id officia voluptate. Id aliqua irure do mollit irure aliquip et deserunt qui. Sint cillum eu excepteur officia irure sit ipsum. Dolore tempor nostrud tempor quis fugiat consectetur nulla excepteur ipsum dolore. Ipsum sunt ipsum cupidatat commodo laboris in adipisicing. Aliqua culpa excepteur id tempor ullamco officia magna quis id ut incididunt sint.\r\n",
                      time: "17/03/2019 22:34:44",
                      author: "sending"
                    },
                    {
                      message: "Commodo culpa quis in culpa adipisicing nulla sunt ipsum est. Non ea incididunt ex nulla in aliqua id consectetur proident laboris amet. Ipsum enim pariatur occaecat esse tempor mollit. Aliqua amet ullamco officia eiusmod cillum magna Lorem officia proident ex. Elit occaecat aliquip et proident anim anim tempor ad duis in.\r\n",
                      time: "22/08/2020 09:50:51",
                      author: "friend"
                    },
                    {
                      message: "Excepteur ut nisi Lorem reprehenderit deserunt dolore laborum reprehenderit qui minim veniam. Labore in voluptate aliquip et occaecat anim duis ut dolor aute in et cillum. Laborum culpa cupidatat ex laboris id labore nulla. Ipsum exercitation dolor ad ullamco incididunt aliqua aliquip.\r\n",
                      time: "22/12/2019 20:02:57",
                      author: "friend"
                    },
                    {
                      message: "Consectetur ad sit nulla ipsum aliqua commodo sit eu occaecat. Minim sunt dolor reprehenderit sint culpa ad nostrud ex amet non dolor elit consectetur qui. Aute commodo enim sint incididunt enim occaecat id officia commodo eiusmod. Et officia commodo laboris minim eu ea est cupidatat minim Lorem ipsum nisi proident. Magna commodo veniam nostrud veniam quis ad ad dolor eiusmod.\r\n",
                      time: "07/07/2020 05:00:14",
                      author: "sending"
                    },
                    {
                      message: "Ipsum sit sunt excepteur sunt velit occaecat et. Reprehenderit anim ut consectetur ea aute duis anim excepteur. Duis commodo quis fugiat incididunt occaecat ea dolor voluptate et magna mollit nulla cupidatat labore. Mollit irure dolore aliquip nulla proident velit excepteur aliquip consectetur enim est adipisicing aute. Laborum irure eu irure commodo occaecat culpa cillum. Enim eiusmod dolore dolor deserunt ut ipsum. Nostrud anim ullamco qui magna in.\r\n",
                      time: "29/03/2020 12:18:13",
                      author: "sending"
                    },
                    {
                      message: "Mollit laborum reprehenderit sunt adipisicing et enim consequat dolor consequat ea irure excepteur laborum in. Et ut qui incididunt nisi do adipisicing culpa et. Officia proident enim velit amet ea excepteur labore sunt incididunt. Ipsum esse anim ipsum mollit pariatur nisi officia ex fugiat do. Excepteur consequat tempor anim aliqua nostrud ipsum fugiat elit non sunt consectetur ea dolore officia. Veniam et consequat magna pariatur sit eu consequat occaecat sunt. Est occaecat ad elit commodo.\r\n",
                      time: "02/04/2019 22:09:43",
                      author: "sending"
                    },
                    {
                      message: "Deserunt do pariatur aliquip pariatur nulla id nisi exercitation duis dolore proident aute. Duis ut elit aliquip consectetur qui ea nostrud minim magna mollit eu Lorem eu. Sit minim velit adipisicing Lorem ullamco Lorem quis fugiat aliqua. Nostrud ad quis fugiat excepteur officia adipisicing duis adipisicing ullamco.\r\n",
                      time: "21/11/2019 09:03:55",
                      author: "friend"
                    },
                    {
                      message: "Enim est qui anim tempor nulla proident pariatur cillum elit. Labore labore sint do consequat non magna minim velit consectetur occaecat do. Aliqua tempor velit laborum consequat id voluptate labore irure consequat eiusmod cupidatat nulla elit.\r\n",
                      time: "03/04/2019 22:29:19",
                      author: "sending"
                    },
                    {
                      message: "Duis cillum qui amet esse laboris culpa dolore incididunt. Fugiat occaecat cupidatat dolor in mollit et incididunt ut. Elit consequat in veniam incididunt eu ex ullamco quis sunt. Labore eiusmod consequat excepteur laboris aliquip anim exercitation consequat et. Ut consequat elit exercitation esse laboris velit et sit esse deserunt reprehenderit. Eiusmod commodo amet minim et esse.\r\n",
                      time: "19/03/2019 10:37:44",
                      author: "friend"
                    },
                    {
                      message: "Sit labore nostrud deserunt qui nisi quis aliquip labore nostrud tempor eu ut. Cillum laboris qui est nostrud esse ad. Consectetur minim nostrud quis officia sit consectetur voluptate quis excepteur tempor. Dolore Lorem id minim et culpa consectetur ullamco reprehenderit velit. Nostrud laborum quis laborum est esse dolor enim proident.\r\n",
                      time: "04/11/2019 04:11:13",
                      author: "sending"
                    },
                    {
                      message: "Reprehenderit velit irure incididunt sit ipsum. Consequat dolore culpa id non culpa pariatur excepteur laborum proident cillum aute. Mollit velit veniam voluptate ut ut in nostrud consequat irure in voluptate et. Voluptate ad magna veniam nulla aute ad fugiat dolor aliquip ullamco. Ut aliquip dolor aute eu nostrud. Excepteur duis nisi nostrud ex anim officia minim ullamco proident. Minim voluptate tempor nostrud esse do quis ut aute commodo deserunt cupidatat velit.\r\n",
                      time: "16/05/2020 02:43:42",
                      author: "sending"
                    },
                    {
                      message: "Qui enim consequat labore pariatur irure mollit aliqua sit aliqua quis incididunt Lorem. Magna dolore magna aliqua enim labore culpa quis occaecat eu. Velit fugiat aliquip nisi sunt deserunt aute pariatur excepteur exercitation eiusmod do irure. Nisi exercitation non aliqua proident pariatur labore incididunt. Laboris eu exercitation est tempor dolor nisi deserunt exercitation do.\r\n",
                      time: "26/09/2020 02:34:56",
                      author: "friend"
                    },
                    {
                      message: "Ullamco non ex aute incididunt fugiat velit reprehenderit voluptate cupidatat qui aliquip in esse ut. Tempor nulla aliquip laboris cupidatat velit minim et sunt qui est deserunt. Aute enim nisi fugiat exercitation mollit. Irure in ut occaecat voluptate commodo sint et in laboris amet elit. Veniam ex reprehenderit ullamco sint elit commodo. Aute nostrud incididunt occaecat ex aute laboris. Ad aliquip deserunt ex velit.\r\n",
                      time: "11/08/2020 07:18:09",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 17,
                  name: "Lelia Collins",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/23.png",
                  status: "Online",
                  mensagens: [
                    {
                      message: "Qui quis veniam id id non in reprehenderit pariatur culpa est ullamco voluptate duis. Esse non do proident non irure in adipisicing esse tempor. Consequat cupidatat consectetur velit occaecat.\r\n",
                      time: "23/02/2020 05:07:22",
                      author: "sending"
                    },
                    {
                      message: "Sit ipsum est aute reprehenderit nisi id pariatur mollit esse. Aliqua nulla occaecat laboris culpa aute nulla commodo id id ipsum. Consectetur occaecat amet officia laboris ea culpa officia laboris magna aute anim magna culpa labore. Sint mollit adipisicing occaecat duis dolore fugiat officia nostrud in minim dolore veniam. In aliquip ipsum nostrud elit sunt nostrud. Aliquip pariatur cillum non culpa veniam non eu duis velit dolor amet aute.\r\n",
                      time: "22/06/2020 19:38:13",
                      author: "sending"
                    },
                    {
                      message: "Enim culpa nulla aliqua irure exercitation consequat enim est sint. Consectetur sit ex commodo et irure amet sint. Ea est ea ipsum aliquip enim eiusmod officia Lorem laborum aliquip do irure cupidatat magna.\r\n",
                      time: "15/10/2019 02:09:35",
                      author: "sending"
                    },
                    {
                      message: "Ullamco excepteur nulla Lorem aliquip cillum labore velit commodo enim commodo quis voluptate Lorem. Exercitation nulla ex sint enim magna est sunt ut excepteur exercitation. Id esse eu duis sint exercitation eu officia in aliqua officia. Excepteur eu exercitation incididunt proident aliquip non consequat dolore do cupidatat ad est voluptate duis. Deserunt officia ut labore dolore sit pariatur ea magna deserunt est ipsum consectetur laborum. Quis non veniam magna consequat reprehenderit eu ea tempor esse anim.\r\n",
                      time: "08/03/2019 10:30:59",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit eiusmod anim excepteur ex velit enim aliquip nostrud. Commodo dolor consectetur officia id elit aliquip eu cupidatat incididunt ipsum eiusmod nostrud reprehenderit magna. Cupidatat tempor aliqua proident enim eu irure enim. Mollit ex esse id irure nisi proident nulla ea amet duis adipisicing proident.\r\n",
                      time: "10/08/2019 08:01:58",
                      author: "sending"
                    },
                    {
                      message: "Mollit labore elit ut mollit elit non aliquip aute officia sint. Esse commodo elit irure est ad nostrud labore proident reprehenderit elit proident aliquip. Dolor proident enim incididunt veniam magna enim nulla laboris nisi. Aliqua elit pariatur nisi ullamco ad.\r\n",
                      time: "10/04/2020 07:51:48",
                      author: "sending"
                    },
                    {
                      message: "Esse occaecat laborum est Lorem ea pariatur duis ullamco mollit pariatur ex quis adipisicing laboris. Enim consequat pariatur aliqua non sint mollit ea dolore id culpa consequat. Amet cillum qui velit commodo sint elit fugiat. Fugiat in dolore sint non exercitation velit incididunt. Minim ex excepteur exercitation laboris qui. Tempor duis esse enim incididunt mollit magna. Nulla sunt sunt elit enim aliquip consequat.\r\n",
                      time: "21/10/2019 14:32:30",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit sit ipsum proident amet dolore sunt laboris magna Lorem quis laboris voluptate. Pariatur nisi do occaecat reprehenderit fugiat elit ex incididunt irure duis sint sunt. Voluptate exercitation ipsum aliquip ullamco consequat aliqua pariatur culpa ipsum proident.\r\n",
                      time: "11/07/2020 17:31:20",
                      author: "friend"
                    },
                    {
                      message: "Quis voluptate ullamco duis id do cillum elit sunt reprehenderit sit esse eiusmod excepteur adipisicing. Minim quis irure qui velit anim et do veniam nisi et. Ex ipsum in occaecat commodo enim nisi. Ea commodo et consectetur laborum laboris do.\r\n",
                      time: "08/10/2019 21:46:28",
                      author: "sending"
                    },
                    {
                      message: "Minim reprehenderit non elit ullamco esse et consequat excepteur anim. Cillum ad do duis nisi anim incididunt sit magna. Lorem dolore anim aute eu quis qui. Magna ex excepteur Lorem incididunt aliqua tempor do minim. Exercitation excepteur esse Lorem laborum tempor qui eu pariatur et do laborum sunt. Commodo velit labore Lorem et consequat adipisicing nulla duis sint nostrud proident magna elit.\r\n",
                      time: "02/03/2019 05:16:36",
                      author: "sending"
                    },
                    {
                      message: "Sint exercitation non aliqua dolor pariatur deserunt ad consectetur id. Aliqua aute mollit veniam esse esse qui do ea irure incididunt consequat laborum. Magna do exercitation excepteur voluptate veniam dolore duis. Cillum officia minim irure adipisicing commodo proident eiusmod pariatur. Proident dolore dolore nulla non exercitation consequat qui reprehenderit minim. In mollit veniam magna ad aliquip laboris elit veniam velit. Excepteur cillum duis sunt cupidatat veniam labore consequat qui est culpa qui et.\r\n",
                      time: "20/03/2020 07:13:55",
                      author: "sending"
                    },
                    {
                      message: "Laborum duis ea proident pariatur fugiat laboris sint tempor deserunt. Sint amet laborum dolore consequat deserunt et occaecat Lorem et cupidatat eu culpa voluptate sunt. Non reprehenderit do voluptate irure anim. Ex minim cupidatat aliquip aliqua excepteur. Ullamco aliqua eiusmod quis occaecat consectetur amet. Commodo cillum est Lorem dolore incididunt nulla irure velit duis aute Lorem duis mollit exercitation.\r\n",
                      time: "22/05/2019 23:08:57",
                      author: "sending"
                    },
                    {
                      message: "Tempor incididunt nostrud laborum elit est ex nostrud fugiat incididunt. Laboris do ullamco dolor magna est elit do sunt voluptate enim. Esse aliquip ad nostrud commodo dolore tempor eu amet proident Lorem. Aliqua sint laboris nisi id mollit ipsum nostrud sint deserunt nisi laboris duis. Occaecat ipsum cupidatat irure ea mollit consectetur velit aliquip dolor.\r\n",
                      time: "06/02/2020 05:44:36",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod ut sunt voluptate exercitation duis eiusmod id nostrud aute dolore aliquip voluptate laborum. Non incididunt esse nisi labore. Dolor consectetur excepteur adipisicing consectetur ullamco ad ea duis veniam duis.\r\n",
                      time: "07/06/2020 20:47:52",
                      author: "sending"
                    },
                    {
                      message: "Cillum excepteur esse cupidatat sint dolore ad duis duis. Ut nostrud labore duis eiusmod eiusmod ad ad nulla deserunt aliqua. Culpa veniam duis id nulla tempor voluptate. Ipsum nisi tempor aliquip sit cupidatat. Ea irure labore voluptate laborum ut et voluptate fugiat consectetur qui ullamco in.\r\n",
                      time: "04/01/2020 01:41:19",
                      author: "friend"
                    },
                    {
                      message: "Est non quis mollit ullamco voluptate ipsum esse. Dolore est incididunt do qui fugiat tempor deserunt consectetur. Veniam ad voluptate laboris sit deserunt culpa. Laboris esse anim deserunt nulla ullamco commodo deserunt nulla aliquip ad minim. Qui id cupidatat commodo amet officia aute ut nostrud commodo Lorem magna velit. Commodo cillum pariatur commodo sint non esse Lorem ad ad nulla.\r\n",
                      time: "18/02/2019 20:08:14",
                      author: "sending"
                    },
                    {
                      message: "Eu aliqua amet eiusmod duis non dolore eu pariatur. Ea qui quis qui sit quis ipsum quis id. Fugiat est consequat est incididunt nisi veniam do reprehenderit incididunt elit. Ea fugiat ipsum velit est tempor. Nostrud sit cillum commodo dolore dolor. Eiusmod tempor consequat qui non veniam adipisicing ex consequat.\r\n",
                      time: "24/07/2019 23:36:27",
                      author: "sending"
                    },
                    {
                      message: "Duis veniam sint excepteur consequat est in veniam sit nulla. Culpa quis reprehenderit minim magna minim consequat ut in duis commodo sunt. Fugiat laborum qui qui dolore veniam esse proident pariatur enim Lorem esse. Ex nulla labore exercitation cillum. Fugiat dolor ullamco et qui. Tempor occaecat et elit do tempor id duis nulla ullamco dolore voluptate laboris cupidatat. Deserunt esse anim exercitation excepteur esse consequat mollit consequat ut consectetur consequat magna.\r\n",
                      time: "11/02/2020 02:28:03",
                      author: "friend"
                    },
                    {
                      message: "Reprehenderit aliqua est est ullamco nisi anim exercitation sunt ut amet. Et sunt irure exercitation minim incididunt magna cillum labore. Do ea esse minim est irure amet dolore Lorem consectetur.\r\n",
                      time: "22/04/2020 03:50:05",
                      author: "sending"
                    },
                    {
                      message: "Sunt nulla ullamco commodo incididunt. Sunt non non anim commodo. Ex commodo enim nulla velit amet pariatur culpa ex minim.\r\n",
                      time: "19/03/2019 13:05:46",
                      author: "friend"
                    },
                    {
                      message: "Minim velit voluptate cillum laboris magna ut cillum Lorem minim qui esse. Ex et minim tempor occaecat. Et magna adipisicing commodo ullamco nostrud.\r\n",
                      time: "09/11/2019 22:36:34",
                      author: "friend"
                    },
                    {
                      message: "Officia adipisicing excepteur nostrud irure. Velit occaecat qui laboris labore minim est amet consequat officia minim qui. Elit laborum nostrud veniam Lorem nostrud est esse ea adipisicing fugiat. Eu consectetur anim esse nisi dolor amet. Irure duis est nostrud dolore. Commodo aliqua do culpa aute non ad id officia et. Excepteur ex anim consequat aute aute ut cupidatat est culpa ullamco qui do elit.\r\n",
                      time: "14/07/2020 20:57:35",
                      author: "sending"
                    },
                    {
                      message: "Veniam velit proident deserunt qui ullamco incididunt mollit sint do occaecat velit id cillum sit. Qui cillum aute deserunt ut do dolor ex. Sunt est quis enim nulla incididunt tempor enim eu culpa fugiat Lorem excepteur. Tempor amet cillum pariatur deserunt labore duis aliqua non elit.\r\n",
                      time: "26/06/2019 05:14:18",
                      author: "friend"
                    },
                    {
                      message: "Consequat velit sint ex velit amet consequat consectetur. Ipsum minim deserunt exercitation id do qui ad Lorem qui veniam sit est laborum reprehenderit. Aliquip ad id non laboris Lorem officia cillum eiusmod nulla enim nostrud laboris laborum duis. Dolore consequat laborum mollit deserunt commodo tempor anim dolor sunt ipsum Lorem consectetur enim in.\r\n",
                      time: "22/07/2019 01:18:58",
                      author: "friend"
                    },
                    {
                      message: "Eu do officia aliqua laboris exercitation voluptate consequat nisi. Et irure nostrud proident commodo cupidatat sint nisi sunt incididunt commodo. Magna fugiat esse consectetur consectetur amet consequat deserunt deserunt. Dolore ut aute officia deserunt deserunt esse elit laborum excepteur ad enim. Est duis eu quis anim ut est aute in sint. Est esse ut ipsum dolore nisi est commodo incididunt.\r\n",
                      time: "25/03/2019 07:27:44",
                      author: "friend"
                    },
                    {
                      message: "Nisi voluptate eu consequat incididunt sint laborum reprehenderit exercitation reprehenderit do minim aliqua amet commodo. Veniam elit consectetur ut nostrud. Occaecat cillum nisi magna sit. Sint magna nulla adipisicing mollit fugiat aliqua amet pariatur esse ea voluptate. Esse magna sit eu irure occaecat officia nulla fugiat occaecat exercitation nulla voluptate.\r\n",
                      time: "28/04/2019 20:04:10",
                      author: "friend"
                    },
                    {
                      message: "Pariatur minim duis tempor excepteur aute reprehenderit esse. Labore ut mollit nisi aliquip Lorem consequat incididunt. Est laborum aliquip aute anim exercitation velit qui tempor aliquip.\r\n",
                      time: "15/12/2019 08:05:03",
                      author: "sending"
                    },
                    {
                      message: "Occaecat duis esse aliqua minim irure ut ipsum. Enim mollit et excepteur eu dolore. Amet qui laborum incididunt nulla officia esse. Culpa consectetur aliquip incididunt et minim ipsum tempor officia consectetur cupidatat. Sit ullamco aliqua officia do. Minim ad tempor labore non ullamco laborum aliquip enim culpa est mollit. Mollit duis ea nostrud ipsum aliqua.\r\n",
                      time: "26/04/2019 11:48:22",
                      author: "friend"
                    },
                    {
                      message: "Laborum eu velit veniam id anim sunt consequat Lorem aute aliquip duis enim consectetur. Qui ea aliquip do id ex eiusmod voluptate deserunt consequat minim nostrud anim id amet. Duis consequat laborum cillum amet occaecat excepteur consectetur laboris duis quis tempor eu. Ad laboris in pariatur velit fugiat Lorem consectetur sunt consectetur esse laboris minim ullamco ut. Dolore consequat eu ut veniam nulla laboris occaecat id do occaecat velit voluptate occaecat. Dolore sint eu ipsum voluptate anim culpa dolore dolore ea cupidatat aute.\r\n",
                      time: "12/05/2020 13:19:06",
                      author: "friend"
                    },
                    {
                      message: "Pariatur ad veniam reprehenderit elit. Culpa ad dolor aliquip velit commodo. Amet officia laboris ullamco dolor ad nulla voluptate do. In laborum culpa esse esse ad consequat nostrud reprehenderit do cillum enim labore. Sunt est pariatur voluptate amet incididunt esse ullamco ipsum.\r\n",
                      time: "26/06/2020 18:53:36",
                      author: "sending"
                    },
                    {
                      message: "Eiusmod mollit exercitation sint culpa dolor sint id laboris enim sunt aute laboris veniam irure. Veniam cillum adipisicing dolore id excepteur cupidatat elit amet sint duis tempor et amet. Amet dolor cupidatat ullamco laborum mollit sit. Nostrud tempor eu consectetur nisi veniam Lorem tempor occaecat consectetur fugiat in anim eiusmod. Aute do duis reprehenderit consequat dolore eiusmod minim. Commodo ipsum quis nostrud veniam dolore reprehenderit pariatur amet non et qui velit. Nostrud mollit qui ea voluptate esse commodo.\r\n",
                      time: "10/05/2019 04:44:01",
                      author: "friend"
                    },
                    {
                      message: "Cillum sint consectetur pariatur veniam magna ea. Elit nulla minim esse nulla adipisicing mollit adipisicing deserunt eu quis tempor tempor occaecat. Proident sint mollit irure magna. Est nisi incididunt cillum ex dolor non in aliqua amet aute aute id duis. Sint nostrud nisi reprehenderit voluptate voluptate sit tempor pariatur adipisicing quis veniam.\r\n",
                      time: "08/01/2020 06:42:59",
                      author: "friend"
                    },
                    {
                      message: "Eiusmod ea in et aute. Est velit mollit do tempor velit magna velit qui sit aute ad commodo ea. Amet adipisicing incididunt et nostrud id sunt voluptate proident. Tempor qui culpa sunt dolor ipsum aute culpa nostrud. Ipsum do ea sit Lorem fugiat irure irure nisi aliqua. Officia sunt sunt irure aliqua qui mollit commodo eu consectetur ad cillum.\r\n",
                      time: "17/08/2019 11:30:23",
                      author: "friend"
                    },
                    {
                      message: "Velit magna laborum nisi Lorem sint quis et exercitation amet sunt non deserunt dolore cupidatat. Occaecat ipsum pariatur ullamco consequat proident enim duis. Cillum reprehenderit eu esse duis nostrud qui tempor aliquip. Sit nostrud adipisicing dolor mollit.\r\n",
                      time: "07/05/2019 03:09:15",
                      author: "sending"
                    },
                    {
                      message: "Culpa eu irure enim ea deserunt amet deserunt nostrud aliquip. Eu excepteur aliqua ut nostrud mollit laborum tempor in mollit id minim amet. Do proident ut non in occaecat ea sint enim aute occaecat culpa eu fugiat.\r\n",
                      time: "01/10/2020 07:32:18",
                      author: "sending"
                    },
                    {
                      message: "Fugiat enim do duis irure eu excepteur quis veniam Lorem pariatur. Velit qui adipisicing enim velit pariatur tempor voluptate et cillum eu nisi aliquip. Dolor magna amet proident ut laboris aliquip magna sint magna eiusmod cupidatat irure amet ipsum. Incididunt enim id non anim in ea culpa officia.\r\n",
                      time: "26/05/2020 21:53:17",
                      author: "friend"
                    },
                    {
                      message: "Pariatur nisi laboris ea deserunt eiusmod. Nisi ex et veniam nostrud ex eu reprehenderit quis velit anim sint sint reprehenderit. Consectetur commodo id qui non ad proident.\r\n",
                      time: "21/11/2019 07:46:08",
                      author: "sending"
                    },
                    {
                      message: "Et nulla laboris adipisicing duis est amet tempor consequat mollit. Laboris ipsum dolor dolor in. Anim adipisicing ex aliqua adipisicing eiusmod pariatur esse irure pariatur aliqua elit consequat. Nostrud nulla anim dolor aliqua est fugiat excepteur voluptate voluptate. Ipsum reprehenderit laboris ullamco voluptate occaecat aute officia est id non laboris.\r\n",
                      time: "11/06/2019 04:13:44",
                      author: "sending"
                    },
                    {
                      message: "Fugiat aute officia Lorem anim cillum eu non elit ut ut culpa duis est. Esse elit laboris consectetur incididunt laborum. Veniam quis id culpa ullamco enim non nisi aute ea. Ipsum exercitation et tempor anim aliquip nostrud. Ipsum in quis reprehenderit magna.\r\n",
                      time: "08/12/2019 10:54:10",
                      author: "sending"
                    },
                    {
                      message: "Exercitation minim officia ullamco non officia reprehenderit irure ullamco. Occaecat id dolor ex ad ex culpa tempor officia nostrud ullamco veniam culpa. Aute proident ipsum aliquip officia dolore occaecat consequat consequat fugiat cupidatat sint excepteur elit deserunt. Elit sint quis commodo dolore elit. Magna consectetur sit minim aliquip aliqua adipisicing occaecat commodo dolor non ut.\r\n",
                      time: "09/09/2020 07:32:16",
                      author: "friend"
                    }
                  ]
                },
                {
                  id: 18,
                  name: "Gregory Scott",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/29.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Minim sit occaecat fugiat incididunt sint exercitation. Incididunt culpa non do amet. Cillum culpa adipisicing in cillum mollit. Lorem sunt nulla mollit enim id laborum labore culpa nulla sunt consectetur.\r\n",
                      time: "18/06/2020 17:42:20",
                      author: "friend"
                    },
                    {
                      message: "Esse voluptate velit in aliquip esse nisi cillum exercitation aliquip exercitation aliqua dolor. Laborum ea officia incididunt sint officia dolor nostrud ea aliquip labore ullamco eiusmod deserunt. Eu sint tempor excepteur ex id qui duis ad eiusmod dolor. Aute sunt commodo aliqua quis nostrud. Consequat ex amet in ad eu labore qui culpa reprehenderit nulla et cillum. In sint aliquip consequat sit velit nisi fugiat labore. Dolor ea ad nisi qui aliquip sit ipsum dolore duis deserunt quis.\r\n",
                      time: "16/09/2019 21:19:39",
                      author: "sending"
                    },
                    {
                      message: "Est labore proident aute amet laboris adipisicing reprehenderit pariatur. Esse dolore veniam in irure. Eiusmod labore esse ut eu officia excepteur ea veniam nulla tempor magna sint. Eiusmod proident ut qui culpa commodo ex Lorem. Mollit culpa deserunt magna ea et non nisi non consectetur sunt elit Lorem sit. Pariatur ex aute fugiat mollit nisi officia qui aute amet elit. Et minim cupidatat fugiat et.\r\n",
                      time: "09/11/2019 13:41:11",
                      author: "sending"
                    },
                    {
                      message: "Aliquip mollit aliquip occaecat sint eu nostrud sunt voluptate laboris in ipsum adipisicing veniam ullamco. Consequat cillum ut pariatur culpa non officia ullamco sit tempor anim ut labore. Nisi incididunt laboris id ea ipsum quis enim exercitation ad mollit officia. Quis nulla magna sit nulla excepteur dolore ex ea. Tempor aliquip dolore incididunt laboris velit culpa ullamco enim deserunt eiusmod exercitation magna laborum. Ut officia excepteur commodo duis sint velit qui sunt minim consectetur reprehenderit nisi quis.\r\n",
                      time: "27/12/2019 18:05:20",
                      author: "friend"
                    },
                    {
                      message: "Duis do anim est velit occaecat nisi. Qui officia tempor culpa anim non. Eiusmod incididunt Lorem occaecat sit laboris duis sunt quis dolor aute do tempor et. Anim deserunt veniam amet dolor consequat laboris proident velit ex. Nulla velit esse dolore nulla cillum.\r\n",
                      time: "29/08/2020 15:21:12",
                      author: "friend"
                    },
                    {
                      message: "Aliqua do magna consectetur sunt dolore laborum laboris exercitation enim anim. Ut laboris culpa cillum pariatur ut in. Aliqua tempor aute consequat fugiat sit nulla irure excepteur do ullamco officia dolore. Ut cupidatat anim deserunt veniam ipsum qui ex irure veniam ut velit. Excepteur aliquip anim in voluptate. Irure exercitation nulla ipsum cupidatat deserunt consequat culpa proident.\r\n",
                      time: "12/05/2020 22:00:37",
                      author: "friend"
                    },
                    {
                      message: "Exercitation id dolore sunt mollit exercitation quis laborum ea. Quis deserunt laboris eiusmod amet sint irure nostrud officia et anim amet. Dolor aute exercitation proident magna nostrud esse qui. Minim sit aute nostrud incididunt irure amet consectetur ad.\r\n",
                      time: "20/09/2020 11:10:28",
                      author: "friend"
                    },
                    {
                      message: "Deserunt ad consectetur commodo non sunt culpa ut in enim aute sunt labore. In excepteur exercitation sit anim voluptate exercitation dolore officia qui sunt consectetur sint dolor. Aute id ex ea sit dolor ipsum nulla aliqua ullamco culpa anim non aliquip. Aute officia velit nisi aliquip aute est pariatur ipsum nulla nisi mollit nulla in. Dolore laboris irure amet veniam velit officia commodo nulla.\r\n",
                      time: "04/04/2019 19:59:03",
                      author: "sending"
                    },
                    {
                      message: "Deserunt ullamco sit exercitation id qui tempor sunt consectetur qui laboris. Minim et elit deserunt reprehenderit ut sit. Tempor sit veniam aliqua ad exercitation fugiat aliquip in non minim ipsum ea. Ullamco sit do pariatur exercitation nisi cupidatat. Mollit consequat velit ea id nisi pariatur ex quis enim laboris elit consectetur. Nisi do id est Lorem nisi proident eu aliqua id mollit. Aliquip sit ut ut non commodo labore.\r\n",
                      time: "07/05/2020 08:30:56",
                      author: "friend"
                    },
                    {
                      message: "Occaecat proident anim excepteur quis eu anim minim laboris ad. Consectetur fugiat cillum irure consectetur et ex aute aliqua fugiat eu. Pariatur occaecat quis nulla ut adipisicing qui. Proident adipisicing anim tempor irure ea voluptate adipisicing nisi adipisicing velit. Duis sint Lorem mollit cillum incididunt culpa non consectetur nostrud. Ipsum ea laborum deserunt incididunt est amet pariatur elit minim reprehenderit nisi.\r\n",
                      time: "06/08/2019 14:19:45",
                      author: "sending"
                    },
                    {
                      message: "Commodo aute ea occaecat qui incididunt Lorem ad laboris. Veniam veniam ad sit nisi dolore. Amet tempor laboris adipisicing est fugiat nisi excepteur aliquip ex labore deserunt. Duis anim aute mollit ut ad. In sint incididunt ipsum dolore adipisicing Lorem. Nulla officia nostrud occaecat veniam do mollit qui anim. Voluptate exercitation commodo consequat tempor aliquip adipisicing aliquip incididunt tempor.\r\n",
                      time: "14/05/2019 11:40:54",
                      author: "sending"
                    },
                    {
                      message: "Voluptate eu dolor Lorem ad sunt sint laboris. Cupidatat quis duis id qui tempor nostrud esse ex dolor eu aute anim incididunt ullamco. Laborum velit irure eiusmod do tempor commodo sint sint enim incididunt ullamco laborum veniam reprehenderit. Do reprehenderit qui consectetur esse duis id eiusmod consequat sunt reprehenderit laboris exercitation eiusmod. Pariatur cupidatat non amet incididunt ut fugiat.\r\n",
                      time: "24/06/2019 04:40:59",
                      author: "sending"
                    },
                    {
                      message: "Enim velit consectetur officia laboris et nisi aliquip aute exercitation ad. Fugiat incididunt consectetur anim elit ad et. In ut elit nisi nostrud fugiat do dolore esse laboris. Dolore voluptate minim adipisicing dolore.\r\n",
                      time: "24/11/2019 07:41:12",
                      author: "sending"
                    },
                    {
                      message: "Esse elit irure cupidatat cillum qui nulla consectetur consequat elit. Nisi qui velit in tempor aliqua commodo et eu voluptate id. Dolore magna in voluptate eiusmod. Excepteur est occaecat consectetur ea esse dolore magna eiusmod aliqua.\r\n",
                      time: "16/07/2019 06:23:07",
                      author: "sending"
                    },
                    {
                      message: "Occaecat culpa eiusmod qui eiusmod anim in voluptate aliqua laborum qui. Officia velit incididunt velit est aute elit. Reprehenderit consequat aute excepteur consequat magna in eiusmod est Lorem nostrud commodo duis aute. Eiusmod consequat nulla incididunt ex dolor dolore magna qui veniam voluptate. Tempor consequat cillum dolore sit duis irure ex id quis labore.\r\n",
                      time: "18/04/2020 03:42:07",
                      author: "sending"
                    }
                  ]
                },
                {
                  id: 19,
                  name: "Laurie Grant",
                  picture: "https://pokeres.bastionbot.org/images/pokemon/57.png",
                  status: "",
                  mensagens: [
                    {
                      message: "Est eiusmod laborum est ex incididunt. Nulla est ea excepteur non et nisi ut nostrud adipisicing. Dolore consectetur do sunt laboris consequat in fugiat ea in consectetur amet ipsum irure. Est fugiat sunt laborum tempor officia. Irure do reprehenderit deserunt fugiat velit sunt cillum anim minim ex. Nostrud qui minim do nulla laborum tempor exercitation do exercitation labore voluptate laborum. Laboris veniam amet mollit adipisicing.\r\n",
                      time: "21/11/2019 19:07:44",
                      author: "friend"
                    },
                    {
                      message: "Proident culpa est veniam culpa anim fugiat. Laboris et labore commodo adipisicing. Sunt labore labore magna quis pariatur non sunt magna ea.\r\n",
                      time: "19/08/2020 10:43:27",
                      author: "friend"
                    },
                    {
                      message: "Mollit anim anim reprehenderit ea Lorem ut incididunt pariatur in. Elit incididunt ex irure velit amet proident amet cupidatat officia. Velit dolore nostrud et proident sint laborum veniam do est. Duis exercitation pariatur et ea esse. Proident cillum id ea officia reprehenderit fugiat laboris est consectetur nulla eu nulla excepteur. Aliquip id Lorem aute magna et nisi id sunt pariatur laborum.\r\n",
                      time: "19/04/2020 16:50:41",
                      author: "sending"
                    },
                    {
                      message: "Eu ullamco reprehenderit tempor non minim. Officia tempor nisi sunt dolore adipisicing veniam est adipisicing consequat fugiat exercitation excepteur. Ut amet amet ex cupidatat velit Lorem consequat minim reprehenderit ut sint fugiat. Laboris duis reprehenderit nulla laboris exercitation sit aliquip elit non dolore mollit veniam dolore. Sint aliquip eiusmod in ullamco adipisicing laboris. Ex et cupidatat nisi officia aute mollit amet exercitation excepteur proident.\r\n",
                      time: "16/07/2019 04:19:07",
                      author: "sending"
                    },
                    {
                      message: "Ullamco duis voluptate quis proident voluptate do et tempor voluptate ut nulla esse laborum duis. Do reprehenderit nisi dolor in ullamco. Dolor nulla in excepteur proident.\r\n",
                      time: "24/01/2020 00:51:05",
                      author: "friend"
                    },
                    {
                      message: "Dolore magna esse est sint cillum est dolor sit ullamco laborum labore. Magna laboris fugiat dolor ad. Reprehenderit occaecat non amet non quis incididunt in enim quis ad. Veniam magna nulla amet quis minim non aliquip reprehenderit labore eiusmod.\r\n",
                      time: "28/01/2020 02:29:19",
                      author: "sending"
                    },
                    {
                      message: "Nostrud nulla ullamco enim voluptate ipsum ipsum nulla Lorem enim ad et. Irure nisi commodo nulla laboris anim. Do labore laboris non elit eiusmod aute cupidatat sunt. Do culpa magna laboris amet qui quis do et enim sit consequat.\r\n",
                      time: "30/06/2019 14:18:43",
                      author: "sending"
                    },
                    {
                      message: "Est velit ut exercitation sint aliquip consequat eiusmod fugiat ad reprehenderit sint. Non sit mollit labore non quis adipisicing. Culpa non incididunt anim quis ex ut eiusmod quis reprehenderit sint proident. Fugiat magna id incididunt quis. In nisi duis minim aliqua amet officia nisi. Dolor enim qui incididunt aliqua eu cupidatat aliqua eu officia ipsum. Ex cillum dolor voluptate non id non commodo magna.\r\n",
                      time: "21/06/2020 08:38:49",
                      author: "sending"
                    },
                    {
                      message: "Labore culpa ullamco consequat eu eu do quis aliqua anim nulla enim veniam esse. Voluptate occaecat ut ipsum occaecat elit. Sunt incididunt elit reprehenderit proident voluptate consequat ipsum pariatur ut. Veniam deserunt elit exercitation irure est eiusmod laborum ea aute. Ut quis do quis magna ut aute exercitation. Qui ullamco enim commodo mollit dolor ex sunt consequat qui. Quis est ex irure in quis deserunt enim do commodo consectetur minim veniam mollit aute.\r\n",
                      time: "18/02/2020 15:35:40",
                      author: "sending"
                    },
                    {
                      message: "Fugiat mollit aliquip non labore tempor ipsum cupidatat exercitation consequat fugiat. Laboris incididunt officia aute enim do id in eu labore culpa consectetur culpa dolor. Nulla consectetur ut culpa sit nulla pariatur eu. Tempor sint occaecat ea nisi nulla incididunt anim tempor ea anim minim.\r\n",
                      time: "16/05/2020 22:21:48",
                      author: "sending"
                    },
                    {
                      message: "Adipisicing velit sit velit reprehenderit consectetur esse sunt fugiat occaecat mollit culpa magna amet. Culpa sint ipsum nisi magna pariatur velit minim minim velit. Laborum anim irure dolore non amet ad nulla.\r\n",
                      time: "07/08/2020 04:56:45",
                      author: "sending"
                    },
                    {
                      message: "Adipisicing et commodo excepteur et dolore consequat amet enim eu officia amet. In laborum anim cupidatat voluptate nulla nisi labore occaecat ad cillum ut nisi. Excepteur pariatur cupidatat excepteur exercitation dolore adipisicing pariatur. Quis esse pariatur qui aute culpa laboris occaecat. Aliquip esse consectetur qui quis. Amet irure Lorem aliqua consectetur est labore mollit laborum.\r\n",
                      time: "27/07/2019 19:57:58",
                      author: "sending"
                    },
                    {
                      message: "Commodo non aliqua minim ullamco non nostrud veniam culpa exercitation dolor. Tempor sunt adipisicing occaecat do reprehenderit ad enim. Officia laborum minim consequat incididunt incididunt duis fugiat nostrud laboris duis pariatur enim. Sunt veniam enim esse aliqua sint dolore cupidatat sint et deserunt.\r\n",
                      time: "27/08/2019 09:32:33",
                      author: "sending"
                    },
                    {
                      message: "Fugiat Lorem aute fugiat aute mollit aute exercitation anim. Duis deserunt tempor officia est pariatur sunt sit incididunt enim fugiat exercitation duis nostrud. Occaecat tempor est nulla irure dolore. Tempor consectetur qui cillum dolore enim eu fugiat esse officia est sit consectetur cupidatat fugiat.\r\n",
                      time: "21/02/2019 14:06:20",
                      author: "friend"
                    },
                    {
                      message: "Aute esse irure tempor exercitation eu deserunt officia culpa veniam pariatur. Eu enim consequat amet eiusmod exercitation tempor dolor. Dolore aute dolor aliquip ut sunt ut exercitation deserunt nulla aliqua et ullamco.\r\n",
                      time: "03/03/2020 19:29:30",
                      author: "friend"
                    },
                    {
                      message: "Aute minim occaecat et sit. Aute ipsum aliquip non cupidatat consequat consectetur amet quis ipsum magna proident eu do non. Non nulla commodo ut do sit. Ea ut laborum laborum est consectetur.\r\n",
                      time: "16/11/2019 16:36:30",
                      author: "friend"
                    },
                    {
                      message: "Sint incididunt enim cupidatat consequat. Id consectetur aute mollit do mollit aliqua minim exercitation voluptate consectetur magna et in. Ex qui incididunt esse voluptate consequat consectetur exercitation do labore quis sit dolore incididunt ad. Amet minim aute dolor ad.\r\n",
                      time: "20/06/2020 09:25:07",
                      author: "friend"
                    },
                    {
                      message: "Elit ad ea id pariatur eiusmod. Est duis id cupidatat anim elit ullamco do aute nulla. Irure enim cillum aute esse sit commodo elit culpa nostrud velit dolor aute laborum aliqua.\r\n",
                      time: "25/07/2019 23:39:25",
                      author: "sending"
                    },
                    {
                      message: "Ipsum elit veniam ipsum nulla in minim fugiat tempor. Qui amet eu nisi magna velit deserunt Lorem. Nostrud incididunt mollit aute aliquip. Veniam nulla nostrud est in.\r\n",
                      time: "08/09/2019 22:37:08",
                      author: "friend"
                    },
                    {
                      message: "Qui exercitation Lorem elit dolore sit elit ipsum mollit nisi et. Ipsum consectetur labore aute aliquip enim cupidatat ullamco sit est voluptate officia ut nostrud. Consectetur ut laboris velit anim laborum. Occaecat elit tempor anim amet ea nostrud veniam esse dolore dolore laboris tempor esse. Elit dolore enim id aute incididunt amet duis est non culpa ullamco. Sit voluptate nisi enim minim exercitation. Eiusmod commodo ea fugiat reprehenderit amet amet.\r\n",
                      time: "14/09/2019 07:36:08",
                      author: "sending"
                    },
                    {
                      message: "Veniam et irure esse Lorem eu magna commodo fugiat mollit laborum reprehenderit exercitation proident Lorem. Qui qui tempor proident duis deserunt. Ex ullamco in ullamco pariatur eu adipisicing fugiat commodo. Adipisicing magna qui pariatur dolore sint ullamco laborum id aute dolor non. Sit nisi velit dolor sunt est id ad consectetur mollit ut. Et pariatur Lorem ut cillum enim dolor esse consectetur ullamco ut ex. Nulla pariatur ad fugiat est voluptate proident cupidatat excepteur adipisicing id.\r\n",
                      time: "22/10/2019 06:03:45",
                      author: "friend"
                    },
                    {
                      message: "Exercitation eiusmod labore dolore mollit do tempor in dolor. Non sint labore esse id qui excepteur quis reprehenderit do. Est est irure officia aliqua cillum consequat ut Lorem velit velit quis enim.\r\n",
                      time: "29/09/2020 12:18:26",
                      author: "friend"
                    },
                    {
                      message: "Aute Lorem labore exercitation nisi cupidatat. Consectetur excepteur aute pariatur ullamco. In aliqua voluptate proident dolore quis non aliqua occaecat dolor amet duis fugiat elit. Laborum adipisicing cillum occaecat velit proident eu irure labore veniam. Veniam laboris anim cupidatat adipisicing Lorem consequat.\r\n",
                      time: "02/05/2020 18:37:52",
                      author: "sending"
                    },
                    {
                      message: "Officia ut officia ullamco ad fugiat consequat cillum magna magna consequat. Laboris quis nostrud aliquip voluptate aliquip aliquip velit duis Lorem. Aute sunt et aute occaecat proident amet incididunt deserunt. Incididunt anim adipisicing duis excepteur eiusmod ipsum ipsum esse aliqua ut laboris ex. Adipisicing commodo adipisicing ipsum mollit irure nulla. Est elit dolor eu tempor nulla.\r\n",
                      time: "09/01/2020 22:40:28",
                      author: "friend"
                    },
                    {
                      message: "Veniam enim occaecat incididunt ad aliquip excepteur aliqua. Ad fugiat occaecat et laboris consequat est. Dolore aliquip culpa labore deserunt est non amet nisi. Ad sint incididunt amet ad exercitation.\r\n",
                      time: "04/11/2019 18:02:15",
                      author: "sending"
                    },
                    {
                      message: "Esse cupidatat eu mollit minim id occaecat voluptate in laboris. Enim anim adipisicing voluptate duis Lorem proident dolor nisi cillum enim id minim. Tempor est velit amet adipisicing nulla nisi sunt excepteur. Cupidatat ut cillum velit eiusmod eiusmod eiusmod ullamco ipsum. Et ex laborum aliqua sunt esse laboris ex duis magna officia. Ullamco occaecat proident amet laborum pariatur. Culpa enim pariatur irure duis occaecat deserunt sunt.\r\n",
                      time: "04/09/2020 14:30:42",
                      author: "friend"
                    },
                    {
                      message: "Ipsum fugiat tempor sunt et nulla ad dolore. Ullamco ex incididunt magna esse quis laboris aliquip et velit sint. In aliqua nisi anim Lorem commodo ipsum ipsum est et tempor ad. Et consequat voluptate sunt quis ullamco officia aute id. Mollit excepteur fugiat id voluptate pariatur consectetur cillum qui enim ut incididunt proident Lorem. Est sunt dolore excepteur pariatur sint tempor.\r\n",
                      time: "13/08/2020 08:11:11",
                      author: "friend"
                    },
                    {
                      message: "Sint deserunt duis id pariatur enim cupidatat ut amet magna. Esse aliquip in qui in sunt dolore esse et reprehenderit labore dolore. Consectetur anim excepteur est fugiat est. Commodo esse aute minim ullamco est dolor ipsum cupidatat et laboris do.\r\n",
                      time: "08/06/2020 07:07:28",
                      author: "sending"
                    },
                    {
                      message: "Labore commodo dolore consequat deserunt dolore veniam commodo irure aliquip veniam. Veniam reprehenderit et magna quis tempor laboris et quis. Eiusmod voluptate ipsum culpa culpa ullamco duis Lorem eu aute amet commodo deserunt. Eu eu velit ad ullamco nostrud ipsum. Proident proident aliqua aliquip eiusmod amet voluptate tempor laboris dolore quis id proident occaecat in.\r\n",
                      time: "20/01/2020 10:38:23",
                      author: "friend"
                    },
                    {
                      message: "Deserunt ullamco reprehenderit sit amet sunt excepteur culpa. Ipsum aliquip anim esse minim veniam exercitation qui ea ad. Et est tempor ipsum minim ea pariatur nulla minim ut deserunt cillum ipsum. Tempor elit aliqua ipsum consectetur id laboris anim aliqua Lorem consectetur pariatur anim in. Sit nostrud culpa eu in velit velit laboris. Nostrud aliqua nisi eiusmod velit qui quis.\r\n",
                      time: "01/03/2020 07:23:34",
                      author: "friend"
                    },
                    {
                      message: "Lorem in eu quis sint consequat. Ex commodo id voluptate in ea. Ipsum et sunt amet amet nulla laboris non ad exercitation veniam nulla deserunt magna. Enim enim do ea voluptate adipisicing id in sunt id eu exercitation. Amet cupidatat culpa voluptate sunt deserunt mollit reprehenderit.\r\n",
                      time: "14/06/2019 07:09:57",
                      author: "sending"
                    },
                    {
                      message: "Exercitation elit sunt anim cillum consequat veniam nostrud ut. Minim dolore proident culpa labore. Lorem dolor labore ipsum reprehenderit amet eiusmod ad incididunt pariatur.\r\n",
                      time: "24/04/2019 22:20:49",
                      author: "friend"
                    },
                    {
                      message: "Enim magna cillum commodo pariatur reprehenderit dolore aliquip pariatur aliquip Lorem. Ipsum incididunt sint pariatur est culpa Lorem minim esse. Sit reprehenderit ut officia labore sint laboris velit. Velit adipisicing minim ex qui cupidatat nulla esse consequat sunt irure irure et ipsum. Est laboris laboris duis anim tempor sint est enim dolore qui ut officia. Irure et sunt Lorem in elit. Aliqua commodo aliqua pariatur amet aliqua tempor aute aute excepteur eiusmod laborum in incididunt.\r\n",
                      time: "17/09/2019 15:49:37",
                      author: "sending"
                    },
                    {
                      message: "Esse commodo ex anim commodo voluptate. Excepteur velit labore laboris anim pariatur amet amet dolore ad. Minim aliqua aliqua esse irure excepteur ipsum Lorem incididunt sit reprehenderit veniam amet duis. Excepteur consectetur eiusmod aliquip dolor.\r\n",
                      time: "16/10/2019 22:37:45",
                      author: "friend"
                    },
                    {
                      message: "Sunt deserunt velit nulla dolor ea nisi occaecat qui amet. Quis elit mollit exercitation non sint velit eu. Proident commodo eu ea tempor nulla consectetur. Labore fugiat sunt esse non sunt mollit consequat officia officia mollit culpa anim culpa. Dolor proident magna incididunt occaecat eu ea exercitation elit magna. Exercitation ut dolore amet consequat amet tempor laboris tempor.\r\n",
                      time: "13/09/2019 07:13:08",
                      author: "friend"
                    }
                  ]
                }
              ],
            },
            contatoSelecionado: null
        };
    }
    
    selecionaContato(contato){
        const novoEstado = {
          dados: this.state.dados,
          contatoSelecionado: contato
        } 

        this.setState(novoEstado); 
    }

    novaMensagem(msg, data){
      let mensagem = {};
      
      mensagem.message = msg;
      mensagem.time = data;
      mensagem.author = "sending"

      this.state.dados.friends[this.state.contatoSelecionado.id].mensagens.push(mensagem)

      const novoEstado = {
        dados: this.state.dados,
        contatoSelecionado: this.state.contatoSelecionado
      } 

      this.setState(novoEstado); 
    }

    render() { 
        return (
            <>
            <div className="whatsapp_container">
                <div className="whatsapp_area">
                    <AreaContatos selecionaContato={this.selecionaContato.bind(this)} friends={this.state.dados.friends}/>
                    <AreaMensagens novaMensagem={this.novaMensagem.bind(this)} friendSelected={this.state.contatoSelecionado} />
                </div>
            </div>
            </>
        );
    }
}

export default Whatsapp;


