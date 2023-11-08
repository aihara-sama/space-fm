import {
  Box,
  Checkbox,
  ClickAwayListener,
  Divider,
  Popper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckedIcon from "components/icons/CheckedIcon";
import SearchIcon from "components/icons/SearchIcon";
import UncheckedIcon from "components/icons/UncheckedIcon";
import React, { useRef, useState, type FunctionComponent } from "react";
import languagesList from "./languages";

interface IProps {
  anchorEl: React.ReactNode;
}

const LanguageSelectPopper: FunctionComponent<IProps> = ({ anchorEl }) => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  // ~~~~~ Cmp state ~~~~~
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [languages, setLanguages] = useState(languagesList);
  const [searchText, setSearchText] = useState("");

  // ~~~~~ Refs ~~~~~
  const anchorRootRef = useRef<HTMLDivElement>();

  // ~~~~~ Vars ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  const checkLanguage = (lg: { title: string; isChecked: boolean }) => {
    setLanguages((prev) => {
      const newLanguages = [...prev];
      const currentLgIdx = prev.findIndex(({ title }) => title === lg.title);
      newLanguages.splice(currentLgIdx, 1, {
        title: lg.title,
        isChecked: !lg.isChecked,
      });
      return newLanguages;
    });
  };

  const checkAllLanguages = () => {
    setLanguages((prev) =>
      prev.map(({ title }) => ({ title, isChecked: true }))
    );
  };
  const uncheckAllLanguages = () => {
    setLanguages((prev) =>
      prev.map(({ title }) => ({ title, isChecked: false }))
    );
  };

  // ~~~~~ JSX ~~~~~
  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => setIsOpen((prev) => !prev)}
          ref={anchorRootRef}
        >
          {anchorEl}
        </Box>
        <Popper
          placement={`${isSm ? "auto" : "right-end"}`}
          open={isOpen}
          anchorEl={anchorRootRef.current}
          sx={{ zIndex: 1 }}
        >
          <Box
            sx={{
              ml: 2,
              mb: 2,
              mr: 2,
              bgcolor: "#fff",
              borderRadius: "13.33px",
              width: 400,
              height: 400,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{
                ".MuiInputBase-root": { py: 1.5, px: 3 },
              }}
              fullWidth
              placeholder="Search..."
              variant="standard"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
              inputProps={{
                sx: { ml: 1 },
              }}
            />
            <Box
              p={2}
              overflow="auto"
              sx={{
                "::-webkit-scrollbar": {
                  width: 10,
                },
                "::-webkit-scrollbar-track": {
                  width: 10,
                  backgroundColor: "#0000000",
                },
                "::-webkit-scrollbar-thumb": {
                  borderRadius: "10px",
                  backgroundColor: "#dddddd",
                },
              }}
            >
              <Box overflow="auto">
                {languages
                  .filter(({ title }) =>
                    title.toLowerCase().startsWith(searchText.toLowerCase())
                  )
                  .map((lg, idx) => (
                    <Box
                      sx={{ cursor: "pointer" }}
                      key={idx}
                      display="flex"
                      alignItems="center"
                      onClick={() => checkLanguage(lg)}
                    >
                      <Checkbox
                        checked={lg.isChecked}
                        icon={<UncheckedIcon />}
                        checkedIcon={<CheckedIcon />}
                      />
                      <Typography>{lg.title}</Typography>
                    </Box>
                  ))}
              </Box>
            </Box>

            <Divider sx={{ borderColor: "#E4E2E4", flex: 1 }} />
            <Box display="flex" justifyContent="space-between" p={2}>
              <Box display="flex" gap={2}>
                <Typography
                  onClick={() => checkAllLanguages()}
                  sx={{ cursor: "pointer" }}
                  fontWeight={500}
                  color="#8F49DE"
                >
                  Select all
                </Typography>
                <Typography
                  onClick={() => uncheckAllLanguages()}
                  sx={{ cursor: "pointer" }}
                  fontWeight={500}
                  color="#8F49DE"
                >
                  Reset
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <Typography
                  onClick={() => setIsOpen(false)}
                  sx={{ cursor: "pointer" }}
                  fontWeight={500}
                  color="#8F49DE"
                >
                  Apply
                </Typography>
              </Box>
            </Box>
          </Box>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default LanguageSelectPopper;
