'use client';

import { useMemo, useState } from 'react';
import { FeaturedCardCarousel } from './FeaturedCardCarousel';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';

export type FeaturedCategory = 'bestSellers' | 'mostVoted' | 'mostLiked';

export interface FeaturedShoe {
	name: string;
	votes: string;
	likes: string;
	progress: string;
	author: string;
	image: string;
	badge?: string;
	country?: string;
}

function toNumberCompact(value: string): number {
	// aceita "7.3k", "890", "1.2k"
	const v = value.trim().toLowerCase();
	if (v.endsWith('k')) {
		const n = Number(v.slice(0, -1));
		return Number.isFinite(n) ? n * 1000 : 0;
	}
	const n = Number(v);
	return Number.isFinite(n) ? n : 0;
}

function toPercent(progress: string): number {
	const n = parseInt(progress.replace('%', ''), 10);
	return Number.isFinite(n) ? n : 0;
}

function chunk<T>(items: T[], size: number): T[][] {
	if (size <= 0) return [items];
	const out: T[][] = [];
	for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
	return out;
}

export function FeaturedTabs({ shoes, locale = 'pt' }: { shoes: FeaturedShoe[]; locale?: Locale }) {
	const [active, setActive] = useState<FeaturedCategory>('bestSellers');

	const sorted = useMemo(() => {
		const base = [...shoes];
		switch (active) {
			case 'mostVoted':
				return base.sort((a, b) => toNumberCompact(b.votes) - toNumberCompact(a.votes));
			case 'mostLiked':
				return base.sort((a, b) => toNumberCompact(b.likes) - toNumberCompact(a.likes));
			case 'bestSellers':
			default:
				// proxy local: maior % = mais perto de produção ("mais vendidos")
				return base.sort((a, b) => toPercent(b.progress) - toPercent(a.progress));
		}
	}, [active, shoes]);

	const groupedShoes = useMemo(() => chunk(sorted, 3).slice(0, 3), [sorted]);

	return (
		<section className="featured">
			<div className="container">
				<div className="featured__header">
					<div>
						<h2>{t(locale, 'featured_title')}</h2>
						<div className="tabs" role="tablist" aria-label={t(locale, 'featured_aria')}>
							<button
								className={`tab ${active === 'bestSellers' ? 'tab--active' : ''}`}
								type="button"
								role="tab"
								aria-selected={active === 'bestSellers'}
								onClick={() => setActive('bestSellers')}
							>
								{t(locale, 'featured_tab_best')}
							</button>
							<button
								className={`tab ${active === 'mostVoted' ? 'tab--active' : ''}`}
								type="button"
								role="tab"
								aria-selected={active === 'mostVoted'}
								onClick={() => setActive('mostVoted')}
							>
								{t(locale, 'featured_tab_voted')}
							</button>
							<button
								className={`tab ${active === 'mostLiked' ? 'tab--active' : ''}`}
								type="button"
								role="tab"
								aria-selected={active === 'mostLiked'}
								onClick={() => setActive('mostLiked')}
							>
								{t(locale, 'featured_tab_liked')}
							</button>
						</div>
					</div>
				</div>

				<div className="featuredGrid">
					{groupedShoes.map((group, index) => (
						<FeaturedCardCarousel key={index} shoes={group} groupIndex={index} />
					))}
				</div>
			</div>
		</section>
	);
}
