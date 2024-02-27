import React from "react";

import { Stack, Breadcrumbs } from "@mui/material";

import { arrowRight } from "../../assets";

export const BreadcrumbsList = ({ breadcrumbs } : { breadcrumbs: React.ReactNode }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<img src={arrowRight} />}  aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}