import ListSearch from "views/pages/Search";
import ListRecentSearches from "views/pages/RecentSearch";

export default [
    {
        path: "/search",
        element: <ListSearch />
    },
    {
        path: "/search/:input",
        element: <ListSearch />
    },
    {
        path: "/search:input/:category",
        element: <ListSearch />
    },
    {
        path: "/recent-searches",
        element: <ListRecentSearches />
    },
]