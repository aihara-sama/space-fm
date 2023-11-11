import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Header from "components/Header";
import SubmitIcon from "components/icons/SubmitIcon";
import UploadIcon from "components/icons/UploadIcon";
import { orbitronFont } from "fonts";
import type { FunctionComponent } from "react";
import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Fade } from "react-reveal";

interface IProps {}
const fileTypes = ["JPG", "PNG", "GIF"];
const ContactPage: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~
  const [files, setFiles] = useState<File[]>([]);

  // ~~~~~ Refs ~~~~~
  const fileRef = useRef<HTMLInputElement>();

  // ~~~~~ Vars ~~~~~
  const [name, setName] = useState({ value: "", isError: false });
  const [email, setEmail] = useState({ value: "", isError: false });
  const [phoneNumber, setPhoneNumber] = useState({ value: "", isError: false });
  const [message, setMessage] = useState({ value: "", isError: false });

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = () => {
    if (!name.value.length) {
      setName(({ value }) => ({
        value,
        isError: true,
      }));
    }
    if (!email.value.length) {
      setEmail(({ value }) => ({
        value,
        isError: true,
      }));
    }
    if (!phoneNumber.value.length) {
      setPhoneNumber(({ value }) => ({
        value,
        isError: true,
      }));
    }
    if (!message.value.length) {
      setMessage(({ value }) => ({
        value,
        isError: true,
      }));
    }
  };
  // ~~~~~ JSX ~~~~~
  return (
    <Box bgcolor="#0E0E10" overflow="hidden">
      <Header />
      <Container maxWidth="xl">
        <Box
          mt={20}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={5}
        >
          <Box flex={1}>
            <Fade bottom>
              <Typography
                fontFamily={orbitronFont.style.fontFamily}
                fontSize={66}
                fontWeight={700}
                color="#fff"
              >
                Contact us{" "}
                <Typography
                  fontFamily={orbitronFont.style.fontFamily}
                  component="span"
                  fontSize={{ xs: 66 }}
                  fontWeight={700}
                  sx={{
                    background: "linear-gradient(90deg, #fdf15f, #cfa300)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  for more
                </Typography>{" "}
                Details
              </Typography>
              <Typography
                mb={2}
                color="#fff"
                fontSize={19}
                fontWeight={300}
                mt={5}
              >
                Space FM envisions a world where music and events are not
                limited by borders, intermediaries, or barriers to access. We
                see a future where artists and fans can connect directly, where
                the magic of live music is brought to you wherever you are, and
                where the blockchain revolutionizes the entire music and events
                industry.
              </Typography>
              <Box
                component="img"
                sx={{ width: "100%" }}
                src="/images/svg/contact-us.svg"
              />
            </Fade>
          </Box>
          <Fade bottom>
            {" "}
            <Box flex={1} borderRadius="24px" py={5} px={3} bgcolor="#fff">
              <Box display="flex" flexDirection="column" gap={6}>
                <TextField
                  onChange={(e) =>
                    setName({ value: e.target.value, isError: false })
                  }
                  value={name.value}
                  sx={{
                    ".MuiInputLabel-shrink, input": {
                      color: "#040404 !important",
                    },
                    ".MuiInputBase-root": {
                      "::before, ::after": {
                        borderBottomColor: name.isError
                          ? "red !important"
                          : "#E4E2E4 !important",
                      },
                    },
                  }}
                  variant="standard"
                  placeholder="Your name"
                  label="Your name"
                />
                <TextField
                  onChange={(e) =>
                    setEmail({ value: e.target.value, isError: false })
                  }
                  value={email.value}
                  sx={{
                    ".MuiInputLabel-shrink, input": {
                      color: "#040404 !important",
                    },
                    ".MuiInputBase-root": {
                      "::before, ::after": {
                        borderBottomColor: email.isError
                          ? "red !important"
                          : "#E4E2E4 !important",
                      },
                    },
                  }}
                  variant="standard"
                  placeholder="Your email"
                  label="Your email"
                />
                <TextField
                  onChange={(e) =>
                    setPhoneNumber({ value: e.target.value, isError: false })
                  }
                  value={phoneNumber.value}
                  sx={{
                    ".MuiInputLabel-shrink, input": {
                      color: "#040404 !important",
                    },
                    ".MuiInputBase-root": {
                      "::before, ::after": {
                        borderBottomColor: phoneNumber.isError
                          ? "red !important"
                          : "#E4E2E4 !important",
                      },
                    },
                  }}
                  variant="standard"
                  placeholder="Your phone number"
                  label="Your phone number"
                />
                <TextField
                  sx={{
                    ".MuiInputLabel-shrink, input": {
                      color: "#040404 !important",
                    },
                  }}
                  variant="standard"
                  label="Your file upload"
                  placeholder="Your file upload"
                  value={Array.from(files)
                    .map((file) => file.name)
                    .join(", ")}
                  onClick={() => fileRef?.current?.click()}
                />
                <TextField
                  onChange={(e) =>
                    setMessage({ value: e.target.value, isError: false })
                  }
                  value={message.value}
                  sx={{
                    ".MuiInputLabel-shrink, input": {
                      color: "#040404 !important",
                    },
                    ".MuiInputBase-root": {
                      "::before, ::after": {
                        borderBottomColor: message.isError
                          ? "red !important"
                          : "#E4E2E4 !important",
                      },
                    },
                  }}
                  variant="standard"
                  placeholder="Your message"
                  label="Your message"
                />
              </Box>
              <Box
                mt={6}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexDirection={{ xs: "column-reverse", lg: "row" }}
                gap={3}
              >
                <Button
                  onClick={() => handleSubmit()}
                  sx={{
                    background:
                      "linear-gradient(-90deg, #1C80C8, #660B90) !important",
                    borderRadius: "40px",
                    py: 3,
                    px: 8,
                    color: "#EEEEEE",
                    width: { xs: "100%", lg: "auto" },
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                  startIcon={<SubmitIcon />}
                >
                  Submit
                </Button>
                <Box
                  {...getRootProps()}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{ cursor: "pointer" }}
                >
                  <UploadIcon />
                  <Typography my={1} color="#333333" fontWeight={700}>
                    Drag & drop files or{" "}
                    <Typography
                      component="span"
                      color="#088586"
                      sx={{ textDecoration: "underline" }}
                      fontWeight={700}
                    >
                      Browse
                    </Typography>
                  </Typography>
                  <Typography>
                    Supported formats: {fileTypes.join(", ")}
                  </Typography>
                  <input
                    {...getInputProps()}
                    ref={fileRef}
                    // @ts-ignore
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </Box>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
