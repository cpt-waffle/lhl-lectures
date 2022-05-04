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
-- Name: addresses; Type: TABLE; Schema: public; Owner: cptwaffle
--

CREATE TABLE public.addresses (
    id integer NOT NULL,
    street_name character varying(100),
    postal_code character varying(10),
    province character varying(50),
    employee_id integer
);


ALTER TABLE public.addresses OWNER TO cptwaffle;

--
-- Name: addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: cptwaffle
--

CREATE SEQUENCE public.addresses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.addresses_id_seq OWNER TO cptwaffle;

--
-- Name: addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptwaffle
--

ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;


--
-- Name: departments; Type: TABLE; Schema: public; Owner: cptwaffle
--

CREATE TABLE public.departments (
    id integer NOT NULL,
    name character varying(50)
);


ALTER TABLE public.departments OWNER TO cptwaffle;

--
-- Name: departments_id_seq; Type: SEQUENCE; Schema: public; Owner: cptwaffle
--

CREATE SEQUENCE public.departments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departments_id_seq OWNER TO cptwaffle;

--
-- Name: departments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptwaffle
--

ALTER SEQUENCE public.departments_id_seq OWNED BY public.departments.id;


--
-- Name: employees; Type: TABLE; Schema: public; Owner: cptwaffle
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    first_name character varying(30),
    last_name character varying(30),
    email character varying(100),
    department_id integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.employees OWNER TO cptwaffle;

--
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: cptwaffle
--

CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employees_id_seq OWNER TO cptwaffle;

--
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cptwaffle
--

ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;


--
-- Name: addresses id; Type: DEFAULT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);


--
-- Name: departments id; Type: DEFAULT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.departments ALTER COLUMN id SET DEFAULT nextval('public.departments_id_seq'::regclass);


--
-- Name: employees id; Type: DEFAULT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);


--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: cptwaffle
--

COPY public.addresses (id, street_name, postal_code, province, employee_id) FROM stdin;
1	3309 avenue Royale	G1R 5B2	Quebec	1
2	Richmond	V6X 2B8	British Columbia	2
3	Yorkton	S3N 1J6	Saskatchewan	3
4	272 Stoney Creek	S4P 3Y2	Saskatchewan	4
5	2564 Tycos Dr	M5T 1T4	Ontario	5
6	1606 Harvest Moon Dr	L3R 0L7	Ontario	6
7	2167 Acton Avenue	M3H 4J1	Ontario	7
8	4962 Galts Ave	T4N 2A6	Alberta	8
9	1671 Goyeau Ave	N9A 1H9	Ontario	9
10	4407 rue Principale	J9L 3G8	Quebec	10
11	2350 Shaughnessy St	V3C 4S7	British Columbia	11
12	2424 90th Avenue	T0J 1B0	Alberta	12
13	4245 Robson St	V6B 3K9	British Columbia	13
14	3180 René-Lévesque Blvd	H3B 4W8	Quebec	14
15	230 Cornwall Street	S4H 0G6	Saskatchewan	15
16	2776 49th Avenue	X0C 0C0	Nunavut	16
17	2694 rue Levy	H3C 5K4	Quebec	17
18	2552 Black Avon Road	B0H 1R0	Nova Scotia	18
19	2379 rue des Champs	G7H 4N3	Quebec	19
20	2894 Merton Street	M1L 3K7	Toronto	20
21	4191 Dundas St	M2N 2G8	Toronto	21
22	548 Adelaide St	M5H 1P6	Toronto	22
23	3426 René-Lévesque Blvd	H3B 4W8	Quebec	23
24	2868 49th Avenue	X0E 1R0	Northwest Territories	24
25	708 Isabella Street	K8N 4Z5	Belleville	25
\.


--
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: cptwaffle
--

COPY public.departments (id, name) FROM stdin;
1	HR
2	Marketing
3	Finance
4	Sales
5	Operations
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: cptwaffle
--

COPY public.employees (id, first_name, last_name, email, department_id, created_at) FROM stdin;
1	Tiya	Blevins	tiya@b.ca	1	2022-03-09 12:30:17.672914
2	Suzannah	Booker	suzannah@b.ca	1	2022-03-09 12:30:17.674146
3	Alissa	Shah	alissa@s.ca	1	2022-03-09 12:30:17.67509
4	Raul	Bird	raul@b.ca	1	2022-03-09 12:30:17.675975
5	Vikki	Charles	vikki@c.ca	1	2022-03-09 12:30:17.676845
6	Lemar	Gary	lemar@g.ca	2	2022-03-09 12:30:17.677696
7	Lydia	Santos	lydia@s.ca	2	2022-03-09 12:30:17.678552
8	Russell	Santana	russell@s.ca	2	2022-03-09 12:30:17.679456
9	Lily-Mae	Cartwright	lily.mae@c.ca	2	2022-03-09 12:30:17.68076
10	Alyx	Hayden	alyx@h.ca	2	2022-03-09 12:30:17.681998
11	Siana	Burns	siana@b.ca	3	2022-03-09 12:30:17.683123
12	Antoinette	Boyer	antoinette@b.ca	3	2022-03-09 12:30:17.684087
13	Abdul	Grainger	abdul@g.ca	3	2022-03-09 12:30:17.685032
14	Caiden	Nielsen	caiden@n.ca	3	2022-03-09 12:30:17.685969
15	Douglas	Stephens	douglas@st.ca	3	2022-03-09 12:30:17.686875
16	Fiza	Savage	fiza@s.ca	4	2022-03-09 12:30:17.687892
17	Aalia	Kirk	aalia@kirk.ca	4	2022-03-09 12:30:17.688929
18	Lily-May	Berry	lily-m@b.ca	4	2022-03-09 12:30:17.689894
19	Geraldine	Walmsley	geraldine@walm.ca	4	2022-03-09 12:30:17.690981
20	Hilary	Whiteley	hilary@w.ca	4	2022-03-09 12:30:17.692135
21	Edna	Forrest	edna@f.ca	4	2022-03-09 12:30:17.693162
22	Sana	Becker	sana@b.ca	4	2022-03-09 12:30:17.69417
23	Chantel	Maddox	chantel@m.ca	4	2022-03-09 12:30:17.69512
24	Chelsy	Pearce	chelsey@p.ca	5	2022-03-09 12:30:17.696083
25	Johan	Heath	johan@h.ca	5	2022-03-09 12:30:17.696957
\.


--
-- Name: addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptwaffle
--

SELECT pg_catalog.setval('public.addresses_id_seq', 1, false);


--
-- Name: departments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptwaffle
--

SELECT pg_catalog.setval('public.departments_id_seq', 1, false);


--
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cptwaffle
--

SELECT pg_catalog.setval('public.employees_id_seq', 1, false);


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- Name: departments departments_pkey; Type: CONSTRAINT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (id);


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


--
-- Name: addresses addresses_employee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.employees(id) ON DELETE CASCADE;


--
-- Name: employees employees_department_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: cptwaffle
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.departments(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

