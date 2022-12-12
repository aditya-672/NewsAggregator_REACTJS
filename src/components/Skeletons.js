import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Skeletons() {
  return (
    <Stack height={575} spacing={1} className="animate-pulse">
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rounded" width={400} height={120} />
      <Skeleton variant="rounded" width={400} height={120} />
    </Stack>
  );
}
