import { REQUEST_STATUS } from "../../../utils/constants";
import { NEWS_REQUEST } from "../actions";
import { initialState } from "../reducer";
import { newsReducer } from "../reducer"

describe('news reducer', () => { 

    it('NEWS_REQUEST', () => { 
        
        const action = {
            type: NEWS_REQUEST,
        };

        expect(newsReducer(initialState, action)).toEqual({
            ...initialState,
            request: REQUEST_STATUS.PENDING,
        })
    })

})
