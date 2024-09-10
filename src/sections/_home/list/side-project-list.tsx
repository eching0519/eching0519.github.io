import type { ISideProjectProps } from 'src/types/side-project';

import { useMemo, useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { _sideProjects } from 'src/assets/data/side-projects';

import { ProjectCategory } from 'src/types/project-category';

import { SideProjectItem } from './side-project-item';

// ----------------------------------------------------------------------

const ITEM_PER_PAGE = 3;
const DATA = _sideProjects;

// ----------------------------------------------------------------------

type TypeProps = {
  sectionRef: React.MutableRefObject<HTMLElement | null>;
};

export function SideProjectList({ sectionRef }: TypeProps) {
  const [currentTab, setCurrentTab] = useState('All');

  const [page, setPage] = useState(1);

  const categories = ['All', ...Object.values(ProjectCategory)];

  const dataFiltered = useMemo(
    () => applyFilter({ inputData: DATA, query: currentTab }),
    [currentTab]
  );

  const dataPaginated = useMemo(
    () => applyPagination({ inputData: dataFiltered, page }),
    [dataFiltered, page]
  );

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
    setPage(1);
  }, []);

  const handlePageChange = useCallback(
    (p: number) => {
      setPage(p);
      if (sectionRef.current != null)
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [sectionRef]
  );

  return (
    <>
      <Tabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
      >
        {categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        gap={4}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{ pt: 5, pb: 10 }}
      >
        {dataPaginated.map((project) => (
          <SideProjectItem key={project.id} project={project} />
        ))}
      </Box>

      <Pagination
        page={page}
        onChange={(_, p) => handlePageChange(p)}
        count={Math.ceil(dataFiltered.length / ITEM_PER_PAGE)}
        sx={{
          pb: 10,
          [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  query: string;
  inputData: ISideProjectProps[];
};

function applyFilter({ inputData, query }: ApplyFilterProps) {
  if (query !== 'All') {
    inputData = inputData.filter((project) => project.category === query);
  }

  return inputData;
}

type ApplyPaginationProps = {
  inputData: ISideProjectProps[];
  page: number;
};

function applyPagination({ inputData, page }: ApplyPaginationProps) {
  const start = Math.max(page - 1, 0) * ITEM_PER_PAGE;
  const end = start + ITEM_PER_PAGE;
  console.log(start, end);
  return inputData.slice(start, end);
}
