function setTeamCount(teams) {
    const teamCount = [];
    for(let i = 0; i < teams; i++) {
        teamCount.push(i + 1);
    }
    return teamCount;
};

function setDraftPicks(rounds, teamsArr) {
    const initOrder = teamsArr
    const draftPickOrder = [];
    for(let i = 0; i < rounds; i++) {
        if((i+2)%2===0){
            draftPickOrder.push(...initOrder)
        } else {
            draftPickOrder.push(...initOrder.reverse())
        }
    }
    return draftPickOrder
}