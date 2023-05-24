export type Timeline = {
  id: number;
  century: number;
  data: {
    title: string;
    subtitle: string;
    content: string;
    image: string;
  };
};

export const timelineData = [
  {
    id: 1,
    century: 14,
    data: {
      title: "Temelji društvenih plesova",
      subtitle: "srednji vijek",
      content:
        "Temelj društvenih plesova stvoren je u XIV. st., osobito na talijanskim i francuskim dvorovima. Ples je poprimio oblik kruženja i plesanja u paru (danse royale). Iz XV. st. sačuvani su zapisi dvorskih, mirnih i odmjerenih tzv. niskih plesova (basse danse) francusko-burgundskoga podrijetla. Traktati o plesu u Italiji, osim polaganoga (bassa danza), opisuju živahne plesove (saltarello, quadernaria, piva). U renesansi, kada je obnovljeni kult ljepote tijela doveo do oživljavanja društvenih zabavnih plesova, uz dvorske plesove promenadna značaja (passamezzo, pavana, allemande, ronde) plesali su se i življi, tzv. visoki plesovi s poskocima (cascarda, tourdion, espringale, Hupftanz, Hupflaut, gaillarde, courante, gavota, passepied, contredanse, poloneza, quadrilla).",
      image:
        "https://static.wixstatic.com/media/c62fe4_e2f993783f144f57812e0b2318d5b9c2~mv2.jpg/v1/fill/w_640,h_274,fp_0.49_0.54,q_80,usm_0.66_1.00_0.01,enc_auto/c62fe4_e2f993783f144f57812e0b2318d5b9c2~mv2.jpg",
    },
  },
  {
    id: 2,
    century: 16,
    data: {
      title: "Renesansa plesa",
      subtitle: "rani novi vijek",
      content:
        "Renesansom plesa može se nazvati XVI. st., kada su se plesovi udruživali u parove pa je nakon polagana plesa redovito slijedio brzi (pavana-gagliarda, passamezzo-saltarello i sl.). Značajan je izvor podataka o plesovima XVI. st. »Orchésographie« Jeana Tabourota (objavljeno 1589. pod pseudonimom Thoinot Arbeau).",
      image: "https://socialdance.stanford.edu/syllabi/images/volta.jpg",
    },
  },
  {
    id: 3,
    century: 17,
    data: {
      title: "Ah ta Francuska...",
      subtitle: "rani novi vijek",
      content:
        "U prvoj polovici XVII. st. francuski su plesovi bili uzor dvorskim i građanskim krugovima ostalih zemalja; uz mnogobrojne plesove u parovima, uvelike su se plesala i kola, osobito francuski branle. Francuski se društveni ples nakon 1650. više nije izvodio u kolu; plesalo se u otvorenim parovima u koloni. Menuet je bio novi vodeći ples, dok ga kao dvorski ples, jačanjem građanstva, nije ukinula Francuska revolucija. Postali su popularni veliki balovi i plesovi pod maskama. U Parizu je 1662. bila osnovana Académie royale de la danse, iz koje je potekao niz plesnih teoretičara koji su se bavili plesnom tehnikom, notacijom plesnih koraka i koreografijom. Ples je našao novu snažnu afirmaciju kao oblik scenske umjetnosti u dvorskom baletu i plesnim točkama francuske opere. U Engleskoj se u XVII. st. razvio country dance, koji se poslije u Francuskoj u izmijenjenu obliku pretvorio u contredanse.",
      image: "https://www.enciklopedija.hr/Ilustracije/HE8_0953.jpg",
    },
  },
  {
    id: 4,
    century: 19,
    data: {
      title: "Valcer - engleski ili bečki?",
      subtitle: "19. stoljeće",
      content:
        "U XIX. st., osim izrazito popularnoga valcera, plesali su se vedri parovni plesovi pristupačni širim građanskim slojevima poput polke, mazurke, galopa, quadrille (četvorke). ",
      image: "https://www.enciklopedija.hr/Ilustracije/HE8_1011.jpg",
    },
  },
  {
    id: 5,
    century: 20,
    data: {
      title: "Tango, rumba, samba, foxtrot, balet i jazz",
      subtitle: "svijet u 20. stoljeću",
      content:
        "U XX. st. izvor novih društvenih plesova bile su Sjeverna i Južna Amerika, a među prvima je u Europu stigao tango. Razvoj plesa u XX. st. povezan je s pojavom i razvojem jazza. Nakon I. svjetskog rata u Europu su pristigli plesovi crnačkoga podrijetla cakewalk, twostep, onestep, a zatim i ragtime te njemu srodan fokstrot, shimmy, swing i boogie-woogie, koji je oko 1950. poprimio različita imena: jitterbug, be-bop, rock’n’roll. Ti su plesovi nastali u sjevernoameričkoj industrijskoj civilizaciji, a stvorilo ih je urbanizirano crnačko stanovništvo. Južnoamerički plesovi kreolskih Crnaca strastveniji su: rumba, samba, merengue, kalipso, ča-ča-ča. Na prijelazu iz XIX. u XX. st. pojavio se, kao odgovor klasičnomu baletu, moderni ples koji dopušta slobodnije pokrete i više osobnog izraza. Razvio se kao pobuna, kao umjetnost revolucionarna i nemirna duha, a odlikuju ga česte promjene u stilu koje donosi gotovo svaki novi naraštaj. Moderni ples u svojem se izričaju bavi sadašnjošću u sociološkom, kulturološkom i političkom smislu te prije svega ljudskim emocijama.",
      image: "https://www.centralhome.com/img/jive-662w.jpg",
    },
  },
];
