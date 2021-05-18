export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // token: "BQDoXadsh0I-IHNrLDgiHrotbLZChcr9HYJSMNisc4IUzn4T9exyW7wMzXGqgxZMyyAWlesCVwMwpD9JXhrHfWObZomHm11S1lGoD1oW8Pn9zy3CvI4mENJCDBkO3smb4g1J0T5vvRix3xqe97qtBY1qePFxulS1l2LeHbcZVykIWZDw"
};

export const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER': 
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
};
