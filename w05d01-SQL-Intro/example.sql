--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Ubuntu 14.1-2.pgdg20.04+1)
-- Dumped by pg_dump version 14.1 (Ubuntu 14.1-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: fruits; Type: TABLE; Schema: public; Owner: cptwaffle
--

CREATE TABLE public.fruits (
    name text,
    weight integer
);


ALTER TABLE public.fruits OWNER TO cptwaffle;

--
-- Data for Name: fruits; Type: TABLE DATA; Schema: public; Owner: cptwaffle
--

COPY public.fruits (name, weight) FROM stdin;
orange	1
coconut	2
appple	1
banana	1
\.


--
-- PostgreSQL database dump complete
--

