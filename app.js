const qbCsv = `player,lastName,position,team
    Kyler,Murray,QB,ARI
    Trace,McSorley,QB,ARI
    Marcus,Mariota,QB,ATL
    Desmond,Ridder,QB,ATL
    Lamar,Jackson,QB,BAL
    Tyler,Huntley,QB,BAL
    Josh,Allen,QB,BUF
    Matt,Barkley,QB,BUF
    Baker,Mayfield,QB,CAR
    Sam,Darnold,QB,CAR
    Matt,Corral,QB,CAR
    Justin,Fields,QB,CHI
    Trevor,Siemian,QB,CHI
    Joe,Burrow,QB,CIN
    Brandon,Allen,QB,CIN
    Deshaun,Watson,QB,CLE
    Jacoby,Brissett,QB,CLE
    Joshua,Dobbs,QB,CLE
    Dak,Prescott,QB,DAL
    Cooper,Rush,QB,DAL
    Ben,DiNucci,QB,DAL
    Russell,Wilson,QB,DEN
    Brett,Rypien,QB,DEN
    Jared,Goff,QB,DET
    Tim,Boyle,QB,DET
    Aaron,Rodgers,QB,GB
    Jordan,Love,QB,GB
    Davis,Mills,QB,HOU
    Matt,Ryan,QB,IND
    Trevor,Lawrence,QB,JAX
    Patrick,Mahomes,QB,KC
    Chad,Henne,QB,KC
    Justin,Herbert,QB,LAC
    Matthew,Stafford,QB,LAR
    John,Wolford,QB,LAR
    Derek,Carr,QB,LV
    Nick,Mullens,QB,LV
    Jarrett,Stidham,QB,LV
    Tua,Tagovailoa,QB,MIA
    Teddy,Bridgewater,QB,MIA
    Kirk,Cousins,QB,MIN
    Kellen,Mond,QB,MIN
    Mac,Jones,QB,NE
    Bailey,Zappe,QB,NE
    Jameis,Winston,QB,NO
    Andy,Dalton,QB,NO
    Ian,Book,QB,NO
    Daniel,Jones,QB,NYG
    Tyrod,Taylor,QB,NYG
    Zach,Wilson,QB,NYJ
    Mike,White,QB,NYJ
    Jalen,Hurts,QB,PHI
    Gardner,Minshew,QB,PHI
    Kenny,Pickett,QB,PIT
    Mitchell,Trubisky,QB,PIT
    Mason,Rudolph,QB,PIT
    Drew,Lock,QB,SEA
    Geno,Smith,QB,SEA
    Trey,Lance,QB,SF
    Jimmy,Garoppolo,QB,SF
    Brock,Purdy,QB,SF
    Tom,Brady,QB,TB
    Kyle,Trask,QB,TB
    Ryan,Tannehill,QB,TEN
    Malik,Willis,QB,TEN
    Carson,Wentz,QB,WAS
    Taylor,Heinicke,QB,WAS
    Colin,Kaepernick,QB,
    Jake,Fromm,QB,
    Anthony,Gordon,QB,`;
const wrCsv = `player,lastName,position,team
DeAndre,Hopkins,WR,ARI
Marquise,Brown,WR,ARI
A.J.,Green,WR,ARI
Rondale,Moore,WR,ARI
Antoine,Wesley,WR,ARI
Drake,London,WR,ATL
Calvin,Ridley,WR,ATL
Olamide,Zaccheaus,WR,ATL
Auden,Tate,WR,ATL
Rashod,Bateman,WR,BAL
Devin,Duvernay,WR,BAL
James,Proche,WR,BAL
Stefon,Diggs,WR,BUF
Gabe,Davis,WR,BUF
Jamison,Crowder,WR,BUF
Isaiah,McKenzie,WR,BUF
Khalil,Shakir,WR,BUF
Marquez,Stevenson,WR,BUF
Isaiah,Hodgins,WR,BUF
D.J.,Moore,WR,CAR
Robbie,Anderson,WR,CAR
Rashard,Higgins,WR,CAR
Terrace,Marshall Jr.,WR,CAR
Shi,Smith,WR,CAR
Darnell,Mooney,WR,CHI
Byron,Pringle,WR,CHI
Velus,Jones,WR,CHI
Equanimeous,St.Brown,WR,CHI
N'Keal,Harry,WR,CHI
David,Moore,WR,CHI
Dazz,Newsome,WR,CHI
Ja'Marr,Chase,WR,CIN
Tee,Higgins,WR,CIN
Tyler,Boyd,WR,CIN
Mike,Thomas,WR,CIN
Trent,Taylor,WR,CIN
Stanley,Morgan,WR,CIN
Trenton,Irwin,WR,CIN
Amari,Cooper,WR,CLE
Donovan,Peoples-Jones,WR,CLE
David,Bell,WR,CLE
Jakeem,Grant,WR,CLE
Anthony,Schwartz,WR,CLE
CeeDee,Lamb,WR,DAL
Michael,Gallup,WR,DAL
Jalen,Tolbert,WR,DAL
James,Washington,WR,DAL
Noah,Brown,WR,DAL
Simi,Fehoko,WR,DAL
Jerry,Jeudy,WR,DEN
Courtland,Sutton,WR,DEN
Tim,Patrick,WR,DEN
K.J.,Hamler,WR,DEN
Kendall,Hinton,WR,DEN
Seth,Williams,WR,DEN
Amon-Ra,St.Brown,WR,DET
D.J.,Chark,WR,DET
Jameson,Williams,WR,DET
Kalif,Raymond,WR,DET
Josh,Reynolds,WR,DET
Quintez,Cephus,WR,DET
Trinity,Benson,WR,DET
Tom,Kennedy,WR,DET
Allen,Lazard,WR,GB
Christian,Watson,WR,GB
Sammy,Watkins,WR,GB
Randall,Cobb,WR,GB
Romeo,Doubs,WR,GB
Amari,Rodgers,WR,GB
Juwann,Winfree,WR,GB
Malik,Taylor,WR,GB
Brandin,Cooks,WR,HOU
Nico,Collins,WR,HOU
John,Metchie III,WR,HOU
Phillip,Dorsett,WR,HOU
Michael,Pittman,WR,IND
Alec,Pierce,WR,IND
Parris,Campbell,WR,IND
Ashton,Dulin,WR,IND
Dezmon,Patmon,WR,IND
D.J.,Montgomery,WR,IND
Christian,Kirk,WR,JAX
Marvin,Jones,WR,JAX
Laviska,Shenault Jr.,WR,JAX
Zay,Jones,WR,JAX
Laquon,Treadwell,WR,JAX
Jamal,Agnew,WR,JAX
JuJu,Smith-Schuster,WR,KC
Mecole,Hardman,WR,KC
Marquez,Valdes-Scantling,WR,KC
Skyy,Moore,WR,KC
Jody,Fortson,WR,KC
Keenan,Allen,WR,LAC
Mike,Williams,WR,LAC
Josh,Palmer,WR,LAC
Jalen,Guyton,WR,LAC
Jason,Moore,WR,LAC
Cooper,Kupp,WR,LAR
Allen,Robinson,WR,LAR
Van,Jefferson,WR,LAR
Landen,Akers,WR,LAR
Davante,Adams,WR,LV
Hunter,Renfrow,WR,LV
Mack,Hollins,WR,LV
Tyron,Johnson,WR,LV
Tyreek,Hill,WR,MIA
Jaylen,Waddle,WR,MIA
Ced,Wilson,WR,MIA
Justin,Jefferson,WR,MIN
Adam,Thielen,WR,MIN
K.J.,Osborn,WR,MIN
Ihmir,Smith-Marsette,WR,MIN
DeVante,Parker,WR,NE
Jakobi,Meyers,WR,NE
Kendrick,Bourne,WR,NE
Nelson,Agholor,WR,NE
Tyquan,Thornton,WR,NE
Ty,Montgomery,WR,NE
Lil'Jordan,Humphrey,WR,NE
Michael,Thomas,WR,NO
Chris,Olave,WR,NO
Jarvis,Landry,WR,NO
Marquez,Callaway,WR,NO
Deonte,Harty,WR,NO
Tre'Quan,Smith,WR,NO
Juwan,Johnson,WR,NO
Kadarius,Toney,WR,NYG
Kenny,Golladay,WR,NYG
Sterling,Shepard,WR,NYG
Wan'Dale,Robinson,WR,NYG
Darius,Slayton,WR,NYG
Elijah,Moore,WR,NYJ
Garrett,Wilson,WR,NYJ
Corey,Davis,WR,NYJ
Braxton,Berrios,WR,NYJ
Denzel,Mims,WR,NYJ
Jeff,Smith,WR,NYJ
A.J.,Brown,WR,PHI
DeVonta,Smith,WR,PHI
Quez,Watkins,WR,PHI
Jalen,Reagor,WR,PHI
Zach,Pascal,WR,PHI
Diontae,Johnson,WR,PIT
Chase,Claypool,WR,PIT
George,Pickens,WR,PIT
Calvin,Austin III,WR,PIT
Gunner,Olszewski,WR,PIT
Cody,White,WR,PIT
Steven,Sims,WR,PIT
DK,Metcalf,WR,SEA
Tyler,Lockett,WR,SEA
Freddie,Swain,WR,SEA
Penny,Hart,WR,SEA
Deebo,Samuel,WR,SF
Brandon,Aiyuk,WR,SF
Jauan,Jennings,WR,SF
Ray-Ray,McCloud,WR,SF
Danny,Gray,WR,SF
Jordan,Matthews,WR,SF
Mike,Evans,WR,TB
Chris,Godwin,WR,TB
Russell,Gage,WR,TB
Julio,Jones,WR,TB
Scott,Miller,WR,TB
Tyler,Johnson,WR,TB
Cyril,Grayson,WR,TB
Jaelon,Darden,WR,TB
Robert,Woods,WR,TEN
Treylon,Burks,WR,TEN
Nick,Westbrook-Ikhine,WR,TEN
Dez,Fitzpatrick,WR,TEN
Terry,McLaurin,WR,WAS
Jahan,Dotson,WR,WAS
Curtis,Samuel,WR,WAS
Cam,Sims,WR,WAS
Odell,Beckham Jr.,WR,
Demarcus,Robinson,WR,
Emmanuel,Sanders,WR,
Cole,Beasley,WR,
John,Ross,WR,
Omar,Bayless,WR,`;
const rbCsv = `player,lastName,position,team
James,Conner,RB,ARI
Darrel,Williams,RB,ARI
Eno,Benjamin,RB,ARI
Keaontay,Ingram,RB,ARI
Jonathan,Ward,RB,ARI
Cordarrelle,Patterson,RB,ATL
Tyler,Allgeier,RB,ATL
Damien,Williams,RB,ATL
Keith,Smith,RB,ATL
Qadree,Ollison,RB,ATL
J.K.,Dobbins,RB,BAL
Gus,Edwards,RB,BAL
Tyler,Badie,RB,BAL
Nate,McCrary,RB,BAL
Justice,Hill,RB,BAL
Devin,Singletary,RB,BUF
James,Cook,RB,BUF
Zack,Moss,RB,BUF
Taiwan,Jones,RB,BUF
Christian,McCaffrey,RB,CAR
Chuba,Hubbard,RB,CAR
D'Onta,Foreman,RB,CAR
David,Montgomery,RB,CHI
Khalil,Herbert,RB,CHI
Trestan,Ebner,RB,CHI
Khari,Blasingame,RB,CHI
Joe,Mixon,RB,CIN
Samaje,Perine,RB,CIN
Chris,Evans,RB,CIN
Nick,Chubb,RB,CLE
Kareem,Hunt,RB,CLE
Demetric,Felton,RB,CLE
Ezekiel,Elliott,RB,DAL
Tony,Pollard,RB,DAL
Javonte,Williams,RB,DEN
Melvin,Gordon,RB,DEN
Mike,Boone,RB,DEN
JaQuan,Hardy,RB,DEN
Damarea,Crockett,RB,DEN
D'Andre,Swift,RB,DET
Jamaal,Williams,RB,DET
Craig,Reynolds,RB,DET
Aaron,Jones,RB,GB
AJ,Dillon,RB,GB
Kylin,Hill,RB,GB
Patrick,Taylor,RB,GB
Marlon,Mack,RB,HOU
Dameon,Pierce,RB,HOU
Rex,Burkhead,RB,HOU
Royce,Freeman,RB,HOU
Jonathan,Taylor,RB,IND
Nyheim,Hines,RB,IND
Ty'Son,Williams,RB,IND
Phillip,Lindsay,RB,IND
Deon,Jackson,RB,IND
Travis,Etienne,RB,JAX
James,Robinson,RB,JAX
Clyde,Edwards-Helaire,RB,KC
Ronald,Jones,RB,KC
Jerick,McKinnon,RB,KC
Isiah,Pacheco,RB,KC
Derrick,Gore,RB,KC
Michael,Burton,RB,KC
Austin,Ekeler,RB,LAC
Isaiah,Spiller,RB,LAC
Joshua,Kelley,RB,LAC
Cam,Akers,RB,LAR
Darrell,Henderson,RB,LAR
Kyren,Williams,RB,LAR
Jake,Funk,RB,LAR
Josh,Jacobs,RB,LV
Kenyan,Drake,RB,LV
Brandon,Bolden,RB,LV
Ameer,Abdullah,RB,LV
Jakob,Johnson,RB,LV
Chase,Edmonds,RB,MIA
Raheem,Mostert,RB,MIA
Myles,Gaskin,RB,MIA
Sony,Michel,RB,MIA
Salvon,Ahmed,RB,MIA
Alec,Ingold,RB,MIA
Dalvin,Cook,RB,MIN
Alexander,Mattison,RB,MIN
C.J.,Ham,RB,MIN
Kene,Nwangwu,RB,MIN
Damien,Harris,RB,NE
Rhamondre,Stevenson,RB,NE
James,White,RB,NE
J.J.,Taylor,RB,NE
Kevin,Harris,RB,NE
Alvin,Kamara,RB,NO
Mark,Ingram,RB,NO
Saquon,Barkley,RB,NYG
Matt,Breida,RB,NYG
Gary,Brightwell,RB,NYG
Breece,Hall,RB,NYJ
Michael,Carter,RB,NYJ
Ty,Johnson,RB,NYJ
Miles,Sanders,RB,PHI
Kenneth,Gainwell,RB,PHI
Boston,Scott,RB,PHI
Najee,Harris,RB,PIT
Derek,Watt,RB,PIT
Benny,Snell,RB,PIT
Anthony,McFarland,RB,PIT
Mataeo,Durant,RB,PIT
Rashaad,Penny,RB,SEA
Kenneth,Walker III,RB,SEA
DeeJay,Dallas,RB,SEA
Travis,Homer,RB,SEA
Darwin,Thompson,RB,SEA
Elijah,Mitchell,RB,SF
Kyle,Juszczyk,RB,SF
Trey,Sermon,RB,SF
Jeff,Wilson,RB,SF
JaMycal,Hasty,RB,SF
Tyrion,Davis-Price,RB,SF
Leonard,Fournette,RB,TB
Rachaad,White,RB,TB
Giovani,Bernard,RB,TB
Ke'Shawn,Vaughn,RB,TB
Patrick,Laird,RB,TB
Derrick,Henry,RB,TEN
Dontrell,Hilliard,RB,TEN
Hassan,Haskins,RB,TEN
Antonio,Gibson,RB,WAS
J.D.,McKissic,RB,WAS
Brian,Robinson,RB,WAS
Alex,Armah,RB,WAS
Chris,Carson,RB,
Devonta,Freeman,RB,`;
const teCsv = `player,lastName,position,team
Zach,Ertz,TE,ARI
Trey,McBride,TE,ARI
Stephen,Anderson,TE,ARI
Kyle,Pitts,TE,ATL
Anthony,Firkser,TE,ATL
Mark,Andrews,TE,BAL
Isaiah,Likely,TE,BAL
Josh,Oliver,TE,BAL
Nick,Boyle,TE,BAL
Ben,Mason,TE,BAL
Dawson,Knox,TE,BUF
O.J.,Howard,TE,BUF
Tommy,Sweeney,TE,BUF
Tommy,Tremble,TE,CAR
Ian,Thomas,TE,CAR
Cole,Kmet,TE,CHI
Hayden,Hurst,TE,CIN
Drew,Sample,TE,CIN
David,Njoku,TE,CLE
Harrison,Bryant,TE,CLE
Dalton,Schultz,TE,DAL
Sean,McKeon,TE,DAL
Jeremy,Sprinkle,TE,DAL
Albert,Okwuegbunam,TE,DEN
Greg,Dulcich,TE,DEN
Eric,Saubert,TE,DEN
T.J.,Hockenson,TE,DET
Robert,Tonyan,TE,GB
Marcedes,Lewis,TE,GB
Josiah,Deguara,TE,GB
Brevin,Jordan,TE,HOU
Pharaoh,Brown,TE,HOU
Mo,Alie-Cox,TE,IND
Jelani,Woods,TE,IND
Evan,Engram,TE,JAX
Dan,Arnold,TE,JAX
Travis,Kelce,TE,KC
Blake,Bell,TE,KC
Noah,Gray,TE,KC
Gerald,Everett,TE,LAC
Donald,Parham,TE,LAC
Tre',McKitty,TE,LAC
Tyler,Higbee,TE,LAR
Kendall,Blanton,TE,LAR
Brycen,Hopkins,TE,LAR
Jacob,Harris,TE,LAR
Darren,Waller,TE,LV
Foster,Moreau,TE,LV
Jacob,Hollister,TE,LV
Jesper,Horsted,TE,LV
Mike,Gesicki,TE,MIA
Durham,Smythe,TE,MIA
Adam,Shaheen,TE,MIA
Irv,Smith,TE,MIN
Johnny,Mundt,TE,MIN
Hunter,Henry,TE,NE
Jonnu,Smith,TE,NE
Taysom,Hill,TE,NO
Adam,Trautman,TE,NO
Ricky,Seals-Jones,TE,NYG
Jordan,Akins,TE,NYG
Chris,Myarick,TE,NYG
C.J.,Uzomah,TE,NYJ
Tyler,Conklin,TE,NYJ
Jeremy,Ruckert,TE,NYJ
Trevon,Wesco,TE,NYJ
Dallas,Goedert,TE,PHI
Richard,Rodgers,TE,PHI
Tyree,Jackson,TE,PHI
Pat,Freiermuth,TE,PIT
Zach,Gentry,TE,PIT
Connor,Heyward,TE,PIT
Noah,Fant,TE,SEA
George,Kittle,TE,SF
Ross,Dwelley,TE,SF
Charlie,Woerner,TE,SF
Cameron,Brate,TE,TB
Kyle,Rudolph,TE,TB
Cade,Otton,TE,TB
Austin,Hooper,TE,TEN
Chigoziem,Okonkwo,TE,TEN
Logan,Thomas,TE,WAS
John,Bates,TE,WAS
Rob,Gronkowski,TE,
Jared,Cook,TE,
Dominique,Dafney,TE,
Brandon,Dillon,TE,
Ian,Bunting,TE,`;
const defCsv = `player,lastName,position,team
Arizona,Cardinals,DEF,ARI
Atlanta,Falcons,DEF,ATL
Baltimore,Ravens,DEF,BAL
Buffalo,Bills,DEF,BUF
Carolina,Panthers,DEF,CAR
Chicago,Bears,DEF,CHI
Cincinnati,Bengals,DEF,CIN
Cleveland,Browns,DEF,CLE
Dallas,Cowboys,DEF,DAL
Denver,Broncos,DEF,DEN
Detroit,Lions,DEF,DET
Green Bay,Packers,DEF,GB
Houston,Texans,DEF,HOU
Indianapolis,Colts,DEF,IND
Jacksonville,Jaguars,DEF,JAC
Kansas City,Chiefs,DEF,KC
Los Angeles,Chargers,DEF,LAC
Los Angeles,Rams,DEF,LAR
Las Vegas,Raiders,DEF,LV
Miami,Dolphins,DEF,MIA
Minnesota,Vikings,DEF,MIN
New England,Patriots,DEF,NE
New Orleans,Saints,DEF,NO
New York,Giants,DEF,NYG
New York,Jets,DEF,NYJ
Philadelphia,Eagles,DEF,PHI
Pittsburgh,Steelers,DEF,PIT
Seattle,Seahawks,DEF,SEA
San Francisco,49ers,DEF,SF
Tampa Bay,Buccaneers,DEF,TB
Tennessee,Titans,DEF,TEN
Washington,Team,DEF,WAS`;
const kCsv = `player,lastName,position,team
Matt,Prater,K,ARI
Younghoe,Koo,K,ATL
Justin,Tucker,K,BAL
Tyler,Bass,K,BUF
Zane,Gonzalez,K,CAR
Cairo,Santos,K,CHI
Evan,McPherson,K,CIN
Cade,York,K,CLE
Brandon,McManus,K,DEN
Riley,Patterson,K,DET
Austin,Seibert,K,DET
Mason,Crosby,K,GB
Ka'imi,Fairbairn,K,HOU
Rodrigo,Blankenship,K,IND
Jake,Verity,K,IND
Ryan,Santoso,K,JAX
Harrison,Butke,K,KC
Dustin,Hopkins,K,LAC
Matt,Gay,K,LAR
Daniel,Carlson,K,LV
Jason,Sanders,K,MIA
Greg,Joseph,K,MIN
Nick,Folk,K,NE
Wil,Lutz,K,NO
Graham,Gano,K,NYG
Greg,Zuerlein,K,NYJ
Eddy,Pineiro,K,NYJ
Jake,Elliott,K,PHI
Chris,Boswell,K,PIT
Jason,Myers,K,SEA
Robbie,Gould,K,SF
Ryan,Succop,K,TB
Jose,Borregales,K,TB
Randy,Bullock,K,TEN
Joey,Slye,K,WAS
JJ,Molson,K,
Jonathan,Garibay,K,
Chris,Naggar,K,
Matthew,Wright,K,
Sam,Sloman,K,`;


window.addEventListener('load', (event) => {
    const btnCreateDraft = document.querySelector('#create')
    btnCreateDraft.addEventListener('click', createDraftTable);
    loadTables();
  });

function setTeamCount(teams) {
    const teamCount = [];
    for(let i = 0; i < teams; i++) {
        teamCount.push(i + 1);
    }
    return teamCount;
};

function setDraftPicks(rounds, teamsArr) {
    const initOrder = teamsArr
    const reverseOrder = initOrder.map((num,ind,arr) => arr.length - ind)
    const draftPickOrder = [];
    for(let i = 0; i < rounds; i++) {
        i%2===0 ? draftPickOrder.push(...initOrder) : draftPickOrder.push(...reverseOrder) 
    }
    return draftPickOrder
}

function createDraftTable() {
    const draftTable = document.querySelector('#draft-table');
    const teams = document.querySelector('#teams');
    const rounds = document.querySelector('#rounds');
    const teamCount = setTeamCount(teams.value);
    const draftPickOrder = setDraftPicks(rounds.value, teamCount);
    draftPickOrder.forEach((val,ind,arr) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add("pick")
        newDiv.innerHTML = `<h3>PICK# ${ind +1} || TEAM# ${val}</h3>
        <div class="info" id="${val}"></div>`
        draftTable.appendChild(newDiv);
    })
}

function loadTables() {
    const qbs = readCSV(qbCsv)
    addPlayers(qbs,"qb");
    const wrs = readCSV(wrCsv)
    addPlayers(wrs,"wr");
    const rbs = readCSV(rbCsv)
    addPlayers(rbs,"rb");
    const tes = readCSV(teCsv)
    addPlayers(tes,"te");
    const defs = readCSV(defCsv)
    addPlayers(defs,"def");
    const ks = readCSV(kCsv)
    addPlayers(ks,"k");
}

const addPlayers = (arr,id) => {
    const tbody = document.getElementById(id);
    arr.forEach((obj) => {
        let {player, lastName, team, string=1} = obj;
        const newTr = document.createElement("tr");
        newTr.classList.add("player")
        newTr.addEventListener("click", selectPlayer)
        newTr.innerHTML =`<td>${player.trim()} ${lastName}</td>
        <td>${team}</td>
        <td>${string}</td>`
        tbody.appendChild(newTr);
    })
}
function readCSV(str) {
    const arr = Papa.parse(str,{header: true});
    return arr.data
}
const selectPlayer = (event) => {
    const playerRow = event.target.parentNode;
    const name = playerRow.children[0].innerText;
    const team = playerRow.children[1].innerText;
    const pos = playerRow.parentNode.id
    console.log(name,team,pos)
}
