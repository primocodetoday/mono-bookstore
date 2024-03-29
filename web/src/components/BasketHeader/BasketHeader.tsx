﻿import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { basketArrayGrid as grid } from '@/constants/basketArrayGrid';
import { useTranslation } from 'react-i18next';

export const BasketHeader = () => {
	const { t } = useTranslation();

	return (
		<Row className="mb-2 px-3 text-muted text-uppercase text-center align-items-center">
			<Col xs={grid.col1.xs}
				sm={grid.col1.sm}
				md={grid.col1.md}
				className="border-right text-left pl-2">
				<p className="h6">{ t('basket.title') }</p>
			</Col>
			<Col xs={grid.col2.xs}
				sm={grid.col2.sm}
				md={grid.col2.md}
				className="border-right px-0">
				<p className="h6">{t('basket.pcs')}</p>
			</Col>
			<Col xs={grid.col3.xs}
				sm={grid.col3.sm}
				md={grid.col3.md}
				className="border-right px-0">
				<p className="h6">{t('basket.price')}</p>
			</Col>
			<Col xs={grid.col4.xs}
				sm={grid.col4.sm}
				md={grid.col4.md}
				className="text-center">
				<i className="fas fa-trash" />
			</Col>
		</Row>
	);
};
