
import { useEffect, useState, useCallback, useRef } from 'react';
import axios from "axios";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
  useCustom,
} from "@table-library/react-table-library/table";
import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  CellSelect,
  HeaderCellSelect,
  useRowSelect,
} from "@table-library/react-table-library/select";
import { usePagination } from "@table-library/react-table-library/pagination";

// import { nodes } from "@/data"; // local data



export default function BasicTable() {

  const theme = useTheme({
    Table: `
        --data-table-library_grid-template-columns:  24px repeat(4, minmax(0, 1fr));
        text-align: center;
    `,
    HeaderCell: `
      font-weight: 400;
      color:var(--gray-color-1);
      text-align: center;
      border-bottom: 2px solid var(--gray-color-2);
      padding:var(--space-2) 0;
    `,
    Cell: `
      padding:var(--space-2) 0;
      border-bottom: 1px solid var(--gray-color-2);
    `
  });

  const BASE_URL = "https://hn.algolia.com/api/v1/search"; // server data

  const INITIAL_PARAMS = {
    search: "", //기본 검색어 셋팅
    filter: false,
    page: 0,
  };

  const [data, setData] = useState({
    nodes: [],
    totalPages: 0,
  });

  // 데이터 필터링해서 가져오기
  const fetchData = useCallback(async (params) => {
    let url = `${BASE_URL}?query=${params.search}&page=${params.page}`;

    if (params.filter) {
      url = `${url}&tags=ask_hn`;
    }

    const result = await axios.get(url);

    setData({
      nodes: result.data.hits.map((hit) => ({ ...hit, id: hit.objectID })),
      totalPages: result.data.nbPages,
    });
  }, []);

  useEffect(() => {
    fetchData({
      search: INITIAL_PARAMS.search,
      filter: INITIAL_PARAMS.filter,
      page: INITIAL_PARAMS.page,
    });
  }, [fetchData]);

  // client-side select
  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action, state) {
    console.log(action, state);
  }

  // server-side search
  const [search, setSearch] = useState(INITIAL_PARAMS.search);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useCustom("search", data, {
    state: { search },
    onChange: onSearchChange,
  });

  // server-side filter
  const [filter, setFilter] = useState(INITIAL_PARAMS.filter);

  const handleFilter = (event) => {
    setFilter(event.target.checked);
  };

  useCustom("filter", data, {
    state: { filter },
    onChange: onFilterChange,
  });

  // server-side pagination
  const pagination = usePagination(
    data,
    {
      state: {
        page: INITIAL_PARAMS.page,
      },
      onChange: onPaginationChange,
    },
    {
      isServer: true,
    }
  );

  // listeners
  const timeout = useRef();
  function onSearchChange(action, state) {
    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(
      () =>
        fetchData({
          search: state.search,
          filter,
          page: pagination.state.page,
        }),
      500
    );
  }

  function onFilterChange(action, state) {
    fetchData({
      search,
      filter: state.filter,
      page: pagination.state.page,
    });
  }

  function onPaginationChange(action, state) {
    fetchData({
      search,
      filter,
      page: state.page,
    });
  }



  const SORTS = {
    NONE: {
      label: "None",
      sortKey: "NONE",
      sortFn: (array) => array,
    },
    TITLE: {
      label: "title",
      sortKey: "TITLE",
      sortFn: (array) => array.sort((a, b) => a.title.localeCompare(b.title)),
    },
    created_at: {
      label: "created_at",
      sortKey: "created_at",
      sortFn: (array) => array.sort((a, b) => a.created_at - b.created_at),
    },
    // TYPE: {
    //   label: "Type",
    //   sortKey: "TYPE",
    //   sortFn: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
    // },
    points: {
      label: "points",
      sortKey: "points",
      sortFn: (array) => array.sort((a, b) => a.points - b.points),
    },
    comments: {
      label: "comments",
      sortKey: "comments",
      sortFn: (array) => array.sort((a, b) => a.comments - b.comments),
    },
    // TASKS: {
    //   label: "Tasks",
    //   sortKey: "TASKS",
    //   sortFn: (array) =>
    //     array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
    // },
  };

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        NONE: (array) => array,
        TITLE: (array) => array.sort((a, b) => a.title.localeCompare(b.title)),
        created_at: (array) => array.sort((a, b) => a.created_at - b.created_at),
        // TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
        comments: (array) => array.sort((a, b) => a.comments - b.comments),
        // TASKS: (array) =>
        //   array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  return (
    <>

      <select
        value={sort.state.sortKey}
        onChange={(event) => sort.fns.onToggleSort(SORTS[event.target.value])}
      >
        {Object.keys(SORTS).map((key) => (
          <option key={key} value={SORTS[key].sortKey}>
            {SORTS[key].label}
          </option>
        ))}
      </select>


      <label htmlFor="search">
        <input id="search" type="text" value={search} onChange={handleSearch} />
      </label>

      <label htmlFor="filter">
        <input
          id="filter"
          type="checkbox"
          checked={filter}
          onChange={handleFilter}
        />
        Only "Ask HN"
      </label>

      <Table
        data={data}
        sort={sort}
        theme={theme}
        layout={{ custom: true }}
        select={select}
        pagination={pagination}
      >
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSelect />
                <HeaderCell>Title</HeaderCell>
                <HeaderCell>Created At</HeaderCell>
                <HeaderCell>Points</HeaderCell>
                <HeaderCell>Comments</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <CellSelect item={item} />
                  <Cell>
                    <a href={item.url}>{item.title}</a>
                  </Cell>
                  <Cell>
                    {new Date(item.created_at).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </Cell>
                  <Cell>{(item.points).toLocaleString("ko-KR")}</Cell>
                  <Cell>{Number(item.num_comments).toLocaleString("ko-KR")}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Total Pages: {data.totalPages}</span>

        <span>
          Page:{" "}
          {Array(data.totalPages)
            .fill()
            .map((_, index) => (
              <button
                key={index}
                type="button"
                style={{
                  fontWeight:
                    pagination.state.page === index ? "bold" : "normal",
                }}
                onClick={() => pagination.fns.onSetPage(index)}
              >
                {index + 1}
              </button>
            ))}
        </span>
      </div>
    </>
  );
};
