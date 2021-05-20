export const initialState = {
    user: null,
    playlists: [],
    topArtists: [],
    topTracks: [],
    playing: false,
    item: null,
    selectedPlayList: null,
    discover_weekly: null,
    token: null
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
        case 'SET_ITEM':
            return{
                ...state,
                item: action.item
            }
        case 'SET_SELECTED_PLAYLIST':
            return{
                ...state,
                selectedPlayList: action.selectedPlayList
            }
        case 'SET_TOP_ARTISTS':
            return{
                ...state,
                topArtists: action.topArtists
            }
        case 'SET_TOP_TRACKS':
            return{
                ...state,
                topTracks: action.topTracks
            }
        default:
            return state;
    }
};
