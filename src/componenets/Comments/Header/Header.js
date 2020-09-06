import React from 'react';
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <Grid container>
            <Grid item lg={12}>
                <h1 style={{ textAlign: 'center'}}>Check Out All the Post Done By Users</h1>
            </Grid>
        </Grid>
    );
};

export default Header;