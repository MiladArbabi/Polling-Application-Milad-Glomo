import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Poll from './components/Poll';
import PollProvider from './components/PollProvider';
import ErrorBoundary from './components/ErrorBoundary'

import { Card, Container } from "./Elements";
import "./App.css";

const App = () => (
  <ErrorBoundary>
    <Router>
      <PollProvider>
        <Layout>
          <Container>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <Card style={{ background: "var(--purp)" }} >
                <AnimatePresence>
                  <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/polls/:id'} component={Poll} />
                    <Route path={'/about'} component={About} />
                  </Switch>
                </AnimatePresence>
              </Card>
            </motion.div>
          </Container>
        </Layout>
      </PollProvider>
    </Router>
  </ErrorBoundary>
);

export default App;