describe('setTeamCount test', () => {
    it('should set an array with number of teams', () => {
        expect(setTeamCount(5)).toEqual([1,2,3,4,5]);
    })
})
describe('setDraftPicks test', () => {
    it('should set an array with reverse order', () => {
        expect(setDraftPicks(2, [1,2,3,4,5])).toEqual([1,2,3,4,5,5,4,3,2,1]);
    })
})