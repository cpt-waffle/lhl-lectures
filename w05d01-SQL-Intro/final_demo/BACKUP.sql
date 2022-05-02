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
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public.fruits OWNER TO cptwaffle;

--
-- Name: fruits_id_seq; Type: SEQUENCE; Schema: public; Owner: cptwaffle
--

CREATE SEQUENCE public.fruits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fruits_id_seq OWNER TO cptwaffle;

--
-- Name: fruits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptwaffle
--

ALTER SEQUENCE public.fruits_id_seq OWNED BY public.fruits.id;


--
-- Name: fruits id; Type: DEFAULT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.fruits ALTER COLUMN id SET DEFAULT nextval('public.fruits_id_seq'::regclass);


--
-- Data for Name: fruits; Type: TABLE DATA; Schema: public; Owner: cptwaffle
--

COPY public.fruits (id, name) FROM stdin;
1	banana
2	papaya
3	dragon fruit
4	tomato
\.


--
-- Name: fruits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptwaffle
--

SELECT pg_catalog.setval('public.fruits_id_seq', 4, true);


--
-- Name: fruits fruits_pkey; Type: CONSTRAINT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.fruits
    ADD CONSTRAINT fruits_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

