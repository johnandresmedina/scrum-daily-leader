import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: 345,
    },
    cardTitle: {
        textAlign: 'left',
    },
    cardRoot: {
        textAlign: 'left',
        marginLeft: '74px',
        padding: 0,
    },
    cardActionRoot: {
        padding: '0 8px 8px 8px',
    },
    deleteIcon: {
        marginLeft: 'auto',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const CustomCard = ({ active, description, handleDeleteClick, title }) => {
    const classes = useStyles();
    const avatarClass = active ? classes.avatar : '';
    const firstLetter = title ? title.substring(0, 1).toUpperCase() : null;

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label='avartar-letter' className={avatarClass}>
                        {firstLetter}
                    </Avatar>
                }
                classes={{ title: classes.cardTitle }}
                title={title}
            />
            <CardContent classes={{ root: classes.cardRoot }}>
                <Typography color='textSecondary' component='p'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions classes={{ root: classes.cardActionRoot }} disableSpacing>
                <IconButton
                    className={classes.deleteIcon}
                    onClick={handleDeleteClick}
                    aria-label='delete'>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

CustomCard.propTypes = {
    active: PropTypes.bool,
    description: PropTypes.string,
    handleDeleteClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool,
};

export default CustomCard;
