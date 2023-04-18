import {fireEvent, render} from '@testing-library/react'
import Search from "../component/Search";
import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux";
import store from "../store";
import Header from "../component/Header";

describe('Search restaurant', () => {
    it('should search restaurant', () => {
        const searchComponent = render(
            <StaticRouter>
                <Provider store={store}>
                    <Search/>
                </Provider>
            </StaticRouter>
        )

        fireEvent.input(searchComponent, { event: { target: 'Shah'} });
        fireEvent.click(searchComponent.getByTestId('search-btn'));

        expect(searchComponent)
    });
});
